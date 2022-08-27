const express = require("express");
const app = express();
require("dotenv").config({ path: "./config/.env" });
const connectDatabase = require("./config/db");
PORT = process.env.PORT;
const truth = require("./route/truth");

//conoecting mongoDB database
connectDatabase();

//setting up middleware

app.use("/api/v1/truth", (req, res, next) => {
  console.log("Request type:", req.method);
  req.Method = req.method;
  req.user = "Amlendra";
  next();
});

//getting data
app.use("/api/v1", truth);

//liesting to the server
app.listen(PORT, () =>
  console.log(
    `server started at port ${PORT} in ${process.env.NODE_ENV} server `
  )
);
