const express = require("express");
const app = express();
const router = express.Router();
router.get("/truth", (req, res) => {
  res.json({ message: "when did you sleep last time" });
});
router.get("/", (req, res) => {
  res.json("this is home page");
});
module.exports = router;
