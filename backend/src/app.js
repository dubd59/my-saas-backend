const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const subscriptionRoutes = require('./routes/subscription.routes');
app.use(subscriptionRoutes);
