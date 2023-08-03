require("dotenv").config();
require("express-async-errors");
//import packages
const express = require("express");
const app = express();

//connectDB
const connectDB = require("./db/connect");
const PORT =  4000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
