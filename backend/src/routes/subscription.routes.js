const express = require('express');
const router = express.Router();
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const User = require('../models/userModel'); // Corrected import path
const StripePayments = require('../models/StripePayments.model');
const { authenticate } = require('../middleware/authMiddleware');

router.post('/api/subscriptions', authenticate, async (req, res) => {
  try {
    if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const { plan } = req.body;

    if (!plan) {
        return res.status(400).json({ error: 'Plan are required.' });
    }

    const user = await User.findById(req.user._id);
    if (!user) {
        return res.status(404).json({ error: 'User not found.' });
    }

    let customer;
    if (!user.stripeCustomerId) {
        customer = await stripe.customers.create({
            email: user.email,
        });
        user.stripeCustomerId = customer.id;
        await user.save();
    } else {
      customer = await stripe.customers.retrieve(user.stripeCustomerId)
    }

    let subscription;
    if(plan === 'monthly') {
      subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ price: process.env.STRIPE_MONTHLY_PLAN }],
        payment_behavior: 'default_incomplete',
        payment_settings: { save_default_payment_method: 'on_subscription' },
        expand: ['latest_invoice.payment_intent'],
      });
    } else if (plan === 'lifetime') {
        subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ price: process.env.STRIPE_LIFETIME_PLAN }],
      });
    } else {
      return res.status(400).json({ error: 'Invalid plan.' });
    }

    
    user.subscription_id = subscription.id;
    user.subscription_status = subscription.status;
    await user.save();

    const stripePayment = new StripePayments({
      stripeId: subscription.id,
      userId: user._id,
      amount: 0, // You might want to calculate the amount based on the plan
      status: 'pending',
      paymentDate: new Date(),
    });
    await stripePayment.save();


    res.status(201).json({ subscription , stripePayment });
  } catch (error) {
    console.error('Error creating subscription:', error);
    res.status(500).json({ error: 'Failed to create subscription.' });
  }
});

router.post('/api/stripe-webhook', express.raw({type: 'application/json'}), async (request, response) => {
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET
  let event;
  
  const sig = request.headers['stripe-signature'];

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    console.log(err.message)
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  switch (event.type) {
    case 'customer.subscription.created':
        const subscriptionCreated = event.data.object;
        await StripePayments.findOneAndUpdate({stripeId:subscriptionCreated.id}, {status:"success"})
        console.log("subscription created")
        break;
    case 'customer.subscription.updated':
      const subscriptionUpdated = event.data.object;
      const updatedUser = await User.findOneAndUpdate(
        { subscription_id: subscriptionUpdated.id },
        { subscription_status: subscriptionUpdated.status },
        { new: true }
      );
      if (updatedUser) {
        console.log("user subscription status updated")
      } else {
        console.log("user not found for subscription updated")
      }
      break;
    case 'invoice.payment_failed':
      const paymentFailed = event.data.object;
      const userPaymentFail = await User.findOneAndUpdate(
        { subscription_id: paymentFailed.subscription },
        { subscription_status: "past_due" },
        { new: true }
      );
      if (userPaymentFail) {
        console.log("user payment failed")
      } else {
        console.log("user not found for payment failed")
      }
      break;
    case 'invoice.payment_succeeded':
      const paymentSuccedded = event.data.object;
      const userPaymentSucced = await User.findOneAndUpdate({subscription_id: paymentSuccedded.subscription}, {subscription_status:"active"});
      await StripePayments.findOneAndUpdate({stripeId:paymentSuccedded.subscription}, {status:"success"})
      console.log("payment successed")
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  response.send();
});

module.exports = router;
