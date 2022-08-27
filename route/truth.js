const express = require("express");
const app = express();
const router = express.Router();

//getting data
router.get("/truth", (req, res, next) => {
  // console.log("Hello from truth middlware");
  res.json({
    message: "when did you sleep last time",
    user: req.user,
    method: req.Method,
  });
  next();
});
router.get("/", (req, res, next) => {
  res.json("this is home page");
  next();
});
module.exports = router;
