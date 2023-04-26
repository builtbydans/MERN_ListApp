const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(`mongodb+srv://dan12345:${process.env.MONGODB_PW}@cluster0.i2bboww.mongodb.net/test`)

app.listen(3001, () => {
  console.log('Server running succesfully on localhost:3001')
})
