const express = require("express");
const app = express();
require("dotenv").config({ path: "./config/.env" });
const connectDatabase = require("./config/db");
PORT = process.env.PORT;
const truth = require("./route/truth");

//conoecting mongoDB database
connectDatabase();

//getting data
app.use("/api/v1", truth);

//setting up middleware

const middlware = (req, res, next) => {
  console.log("this is sending from middlware");
};
app.use(middlware);
//liesting to the server
app.listen(PORT, () =>
  console.log(
    `server started at port ${PORT} in ${process.env.NODE_ENV} server `
  )
);
