const express = require('express')
const path = require('path')
const router = express.Router()
const User = require('../../models/User')


const config = require('../../config')

router.get('/', (req, res) => {
  res.send('hello')
})

router.post('/bookmark', (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    { $push: { bookmark: req.body.bookmark } },
    { new: true }
  ).then((user) => {
    res.send(user.bookmark);
  });
})

router.get("/bookmark", (req, res) => {
  User.findById(req.user._id)
    .then(user => {
      res.send(user.bookmark)
    })
})


module.exports = router