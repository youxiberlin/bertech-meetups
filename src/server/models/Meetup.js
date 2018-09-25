const mongoose = require('mongoose')
const Schema = mongoose.Schema

const meetupSchema = new Schema({
  name: String,
  meetupId: String,
  description: {
    type: String,
  },
})

module.exports = mongoose.model('Meetup', meetupSchema)