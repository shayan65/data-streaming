const mongoose = require('mongoose');
const {v4:uuidv4} = require('uuid');

const stockSchema = new mongoose.Schema({
    Symbol: {
        type: String,
        required: true,
    },
    PurchaseDate: {
        type: Date,
        required: true,
    },
    Volume: {
        type: Number,
        required: true,
    },
    PurchasePrice: {
        type: Number,
        required: true,
    },
}, { _id: false });

const userPortfolioSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true  // Ensure userId is unique
    },
    stocks: [stockSchema]
  }, {
    timestamps: true  // Adds createdAt and updatedAt timestamps
  });

const UserPortfolio = mongoose.model('UserPortfolios', userPortfolioSchema);

module.exports = UserPortfolio;