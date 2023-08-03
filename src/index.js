require('dotenv').config();
require("express-async-errors");
//import packages
const express = require("express");
const app = express();

//connectDB
const PORT = process.env.PORT || 4000;

app.get("/home", (req, res) => {
  res.send("<h1>Home</h1>");
});

const start = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
