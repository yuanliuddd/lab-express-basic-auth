const router = require("express").Router();



router.get("/", (req, res, next) => {
  
  res.send("<h1>Hello Igor </h1>")
})



module.exports = router; 