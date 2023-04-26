const express = require("express");
const mongoose = require("mongoose");
const app = express();
const env = require('dotenv').config();
const cors = require('cors');
const UserModel = require("./models/Users");

app.use(express.json())
app.use(cors());

mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PW}@cluster0.i2bboww.mongodb.net/MERNListApp?retryWrites=true&w=majority`
);

app.get("/getUsers", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.send(users);
    console.log(users);
  } catch(err) {
    console.log(err);
  }
});

app.post("/createUser", async (req, res) => {
  try {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);

  } catch(err) {
    console.log("Failed to create a new user - ", err);
  }
});

app.listen(3001, () => {
  console.log('Server running succesfully on localhost:3001')
});
