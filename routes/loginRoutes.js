const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const router = require("express").Router();
require("dotenv/config");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res, next) => {
  res.sendFile(
    "/Users/yuanliu/Desktop/Ironhack/lab-express-basic-auth/views/login.html"
  );
});

router.post("/", async (req, res, next) => {
  try {
    const { email, password, userName } = req.body;
    const foundUser = await User.findOne({ email });

    if (!foundUser) return;

    const passwordCheck = await bcrypt.compare(password, foundUser.password);

    if (!passwordCheck) return;

    const payLoad = { email, password, userName };
    const token = jwt.sign(payLoad, process.env.TOKEN_SECRET, {
      algorithm: "HS256",
      expiresIn: "1day",
    });

    res.json(token);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
