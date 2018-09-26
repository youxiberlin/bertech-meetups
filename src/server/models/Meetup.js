const mongoose = require('mongoose')
const Schema = mongoose.Schema

const meetupSchema = new Schema({
  name: String,
  meetupId: String,
  venue: String,
  date: String,
  time: String,
  description: {
    type: String,
  },
})

module.exports = mongoose.model('Meetup', meetupSchema)