const express = require("express");
const app = express();
require("dotenv").config({ path: "./config/.env" });
PORT = process.env.PORT;
const truth = require("./route/truth");
app.use("/api/v1", truth);
app.listen(PORT, () =>
  console.log(
    `server started at port ${PORT} in ${process.env.NODE_ENV} server `
  )
);
