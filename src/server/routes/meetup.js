const express = require('express')
const path = require('path')
const router = express.Router()
const User = require('../models/User')
// const meetupRoutes = require('./meetup')

// const { userMiddleware } = require('../utils/middleware')
// router.use(userMiddleware)
// router.use('/meetup', meetupRoutes)

const config = require('../config')

router.get('/', (req, res) => {
  res.send('hello')
})

router.post('/bookmark', (res, req) => {
  console.log('received post request')
  console.log(request.body)
  res.send('hello from server')

  //     User.findByIdAndUpdate(
  //         req.user._id,
  //         { $push: { bookmark: req.body.id } },
  //         { new: true }
  //     ).then((user) => {
  //         res.send(user);
  //     });
})


module.exports = router