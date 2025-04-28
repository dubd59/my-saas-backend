const mongoose = require('mongoose');

const stripePaymentSchema = new mongoose.Schema({
  stripeId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  paymentDate: {
    type: Date,
    required: true,
  },
});

const StripePayment = mongoose.model('StripePayment', stripePaymentSchema);

module.exports = StripePayment;