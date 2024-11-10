const yahooFinance = require("yahoo-finance2").default;
const mongoose = require("mongoose");
const redis = require("redis");
const { Server } = require("socket.io");

const client = redis.createClient();

const Stock = mongoose.model("Stock", {
  symbol: String,
  price: Number,
  lastUpdated: Date,
});

async function fetchData(symbols) {
  try {
    const data = await yahooFinance.quote(symbols);
    return data.reduce((acc, stock) => {
      if (stock.symbol && stock.regularMarketPrice != null) {
        acc[stock.symbol] = stock.regularMarketPrice;
      }
      return acc;
    }, {});
  } catch (error) {
    console.error("Error fetching data:", error);
    // Fallback: Retrieve cached data for each symbol
    const fallbackData = {};
    for (const symbol of symbols) {
      const cachedPrice = await client.get(`cache:${symbol}`);
      if (cachedPrice) fallbackData[symbol] = cachedPrice;
    }
    return fallbackData;
  }
}

function startStockDataService(io) {
  setInterval(async () => {
    const symbols = ['AAPL']; //What symbols should go here?
    const prices = await fetchData(symbols);

    for (const [symbol,price] of Object.entries(prices)){
        await client.set(`cache:${symbol}`, price) //caching in redis
        await Stock.findOneAndUpdate(
            {symbol}, {price, lastUpdated: new Date()},
            {upsert: true}
        );
        io.emit('priceUpdate', {symbol,price}) //Emit data via WebSocket
    }
  }, 5000);  //5 second intervals
}

async function getStock() {
  const results = await yahooFinance.quoteSummary("AAPL");
  console.log(results);
}

module.exports = { getStock, startStockDataService };
