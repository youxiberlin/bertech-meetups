const express = require('express')
const path = require('path')
const router = express.Router()
const User = require('../models/User')


const config = require('../config')

router.post('/bookmark', (res, req) => {
  res.send('hello from server')
})




module.exports = router