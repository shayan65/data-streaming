const mongoose = require('mongoose');
const {v4:uuidv4} = require('uuid');

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: () => uuidv4(),
        unique: true  // Ensure userId is unique
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,  // Ensure email is unique
        match: [/.+@.+\..+/, 'Please enter a valid email address']  // Basic email format validation
    },
    password: {
        type: String,
        required: true,
        minlength: 4  // Minimum password length
    }
  }, {
    timestamps: true  // Adds createdAt and updatedAt timestamps
  });

const User = mongoose.model('User', userSchema);

module.exports = User;