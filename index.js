const express = require('express');
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("useFindAndModify", false);

mongoose.connect(
  process.env.MONGO_ATLAS_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => {
    console.log("Successfully connected to DB!");
  }
);


app.get("/", (req, res) => {
    res.send('<h1>Hello Express!</h1>');
})

app.get("/ping", (req, res) => {
    res.json({inset: "haldljksaf"})
});


app.listen((process.env.PORT || 5000), (req, res) => {
    console.log("server started on port 5000");
})