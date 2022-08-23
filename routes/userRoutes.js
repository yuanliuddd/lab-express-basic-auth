
const signupRoutes = require("./signupRoutes.js");
const router = require('express').Router(); 
const loginRoutes = require('./loginRoutes.js')

router.get("/", async (req, res, next) => {
  res.sendFile(
    "/Users/yuanliu/Desktop/Ironhack/lab-express-basic-auth/views/user.html"
  );
});

router.use("/signup", signupRoutes);
router.use("/login", loginRoutes);

module.exports = router; 