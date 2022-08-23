const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const router = require("express").Router();
require("dotenv/config");

router.get("/", async (req, res, next) => {
  res.sendFile(
    "/Users/yuanliu/Desktop/Ironhack/lab-express-basic-auth/views/signUp.html"
  );
});

router.post("/", async (req, res, next) => {
  try {
    const { userName, email, password } = req.body;
    const exist = await User.findOne({ email });

    if (exist) return alert("Email existed ! ");

    const passwordHashed = await bcrypt.hash(
      password,
      Number(process.env.saltRound)
    );

    const newUser = await User.create({
      userName,
      password: passwordHashed,
      email,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json("Bad Request");
    next(error);
  }
});

module.exports = router;
