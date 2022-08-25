const express = require("express");
const app = express();
require("dotenv").config({ path: "./config/.env" });
const connectDatabase = require("./config/db");
PORT = process.env.PORT;
const truth = require("./route/truth");
connectDatabase();
app.use("/api/v1", truth);
app.listen(PORT, () =>
  console.log(
    `server started at port ${PORT} in ${process.env.NODE_ENV} server `
  )
);
