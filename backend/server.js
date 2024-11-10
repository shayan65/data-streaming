const express = require("express");
const cors = require("cors");
const app = express();
const {MongoClient} = require('mongodb');
const { default: mongoose, Schema } = require("mongoose");
const User = require("./models/userModel");
const bcrypt = require('bcrypt');
const {getStock, startStockDataService} = require('./db/db')
const {Server} = require('socket.io');
const http = require('http');

const server = http.createServer(app);
const io = new Server(server);

// Middleware
app.use(cors());
app.use(express.json());

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'myProject';

mongoose.connect('mongodb://localhost:27017/myProject', {
})


// const Model = mongoose.model('Model', {}, 'documents');

// const document = Model.create({a:8});


// async function main() {
//   await client.connect();
//   console.log('Connected successfully to mongodb server');
//   const db = client.db(dbName);
//   const collection = db.collection('documents');

//   // const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
//   // console.log('Inserted documents =>', insertResult);

//   const findResult = await collection.find({}).toArray();
//   console.log('Found documents =>', findResult);    
//   return 'done.'
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());

  


// Sample route to handle registration
app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;
  // Handle saving to database here
  const existingUser = await User.findOne({ username: username})

  if (existingUser){
    return res.status(400).send('User already exists');
  }
  const hashedPass = await bcrypt.hash(password, 10);
  const newUser = new User({ username: username, email: email, password: hashedPass})

  await newUser.save();
  return res.status(201).send('Created')

  console.log("USER DETAILS", username, email, password);
  res.json({ message: "User registered successfully!" });
});

//Start stock data service
//startStockDataService(io);

app.listen(5000, () => {
  getStock();
  console.log("Server is running on http://localhost:5000");
});
