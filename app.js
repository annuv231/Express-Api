const express = require("express");
const app = express();
require("dotenv").config({ path: "./config/.env" });

app.get("/", (req, res) => {
  res.json({ message: "this is message" });
});
console.log(process.env);
PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(
    `server started at port ${PORT} in ${process.env.NODE_ENV} server `
  )
);
