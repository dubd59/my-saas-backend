// In your User model file (e.g., User.js or user.model.js)

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // ... other fields in your User model ...
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  subscription_id: {
    type: String,
  },
  subscription_status: {
    type: String,
    default: "inactive"
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;