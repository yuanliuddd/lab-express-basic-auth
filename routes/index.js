const router = require('express').Router()
const userRoutes = require('./userRoutes.js')

/* GET default route */
router.get('/', (req, res, next) => {
  res.json({ success: true })
})

router.use("/user",userRoutes)

module.exports = router
