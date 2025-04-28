const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// database connection
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));


app.use(cors());
app.use(express.json());

const subscriptionRoutes = require('./routes/subscription.routes');
const userRoutes = require('./routes/userRoutes');
app.use(subscriptionRoutes);
app.use('/api/users', userRoutes);

// New route to handle requests to the root URL ("/")
app.get('/', (req, res) => {
  res.send('Welcome to My SaaS App Backend!');
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});