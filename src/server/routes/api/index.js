const express = require('express')
const router = express.Router()
const axios = require('axios')

const authRoutes = require('./auth')
const { userMiddleware, checkLoggedIn } = require('../../utils/middleware')

router.use(userMiddleware)

router.get('/', (req, res) => {
    axios.get('https://api.meetup.com/find/upcoming_events?key=54465a657dc2b49e3743e613548e&excluded_groups=25779929,4927432,13625922,24913806&lat=52.516382&lon=13.377954&topic_category=9696,108403,10579,7860&sign=true')
        .then(result => {
            res.send(result.data)
        })
        .catch(console.error)
})

router.get('/protected', checkLoggedIn, (req, res) => {
    console.log('USER', req.user)
    res.send({ success: true })
})

router.use('/auth', authRoutes)

router.use((req, res) => {
    res.status(404).send({ error: 'not-found' })
})

module.exports = router
