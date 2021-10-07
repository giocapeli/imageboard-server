const { Router } = require("express");
const router = new Router();

const User = require("../models").user;

router.get("/", async (req, res, next) => {
  try {
    res.send("Hello");
  } catch (e) {
    next(e);
  }
});

module.exports = router;
