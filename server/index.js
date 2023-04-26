const express = require("express");
const mongoose = require("mongoose");
const app = express();
const env = require('dotenv').config();
const UserModel = require("./models/Users");

mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PW}@cluster0.i2bboww.mongodb.net/MERNListApp?retryWrites=true&w=majority`
);

app.get("/getUsers", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.send(users);
    console.log(users);
  } catch(err) {
    console.log(err)
  }
});

app.listen(3001, () => {
  console.log('Server running succesfully on localhost:3001')
});
