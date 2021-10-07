const { Router } = require("express");

const Image = require("../models").image;

const router = new Router();

router.get("/images", async (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
});
