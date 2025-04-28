const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/your_database_name', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));


app.use(cors());
app.use(express.json());

const subscriptionRoutes = require('./routes/subscription.routes');
const userRoutes = require('./routes/userRoutes');
app.use(subscriptionRoutes);
app.use('/api/users', userRoutes);
