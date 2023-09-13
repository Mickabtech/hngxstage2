const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

// Create the Person model
const User = mongoose.model('User', userSchema);

module.exports = User;
