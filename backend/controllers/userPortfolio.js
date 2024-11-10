//userCSV validation function
//userCSV saved using my UserPortolio model

const mongoose = require('mongoose');
const User = require('./models/User'); // Assuming the model is in models/User.js

async function saveUserWithStock() {
  try {
    // Create a new user document with a single stock entry
    const newUser = new User({
      userId: 'user12345',  // Unique user ID
      stocks: [
        {
          Symbol: 'AAPL',  // Stock symbol
          PurchaseDate: new Date('2023-01-15'),  // Date the stock was purchased
          Volume: 50,  // Quantity of shares
          PurchasePrice: 150.00,  // Price at which the stock was purchased
        }
      ]
    });

    // Save the user document to the database
    await newUser.save();

    console.log('User saved successfully!');
  } catch (error) {
    console.error('Error saving user:', error);
  }
}

// Connect to MongoDB and save the user
mongoose.connect('mongodb://localhost:27017/yourDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    saveUserWithStock();
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
