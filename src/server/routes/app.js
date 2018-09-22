const express = require('express')
const path = require('path')
const router = express.Router()
const User = require('../models/User')


const config = require('../config')

router.get('/*', (req, res) => {
    const indexPath = config.IS_PRODUCTION ? '../public/app/index.html' : '../../../dist/index.html'
    res.sendFile(path.join(__dirname, indexPath))
})


// router.post('/bookmark', (req, res) => {

//     User.findByIdAndUpdate(
//         req.user._id,
//         { $push: { bookmark: req.body.id } },
//         { new: true }
//     ).then((user) => {
//         res.send(user);
//     });
// })

module.exports = router