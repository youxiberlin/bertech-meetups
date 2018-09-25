const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Recommend = require("../models/Recommend")

const restSchema = new Schema({
  name: String,
  address: String,
  phone: String,
  yelpId: String,
  location: { type: { type: String }, coordinates: [Number] },
  category: {
    type: [String],
    enum: ["Pizza", "Burger", "Vegan", "Sushi", "German", "Indian", "Thai", "Vietnamese", "Craft beer", "Others"],
  },
  description: {
    type: String,
  },
  picPath: String,
  recommendation: [{
    type: Schema.Types.ObjectId,
    ref: "Recommend"
  }]
});

restSchema.index({ location: '2dsphere' });

const Rest = mongoose.model('Rest', restSchema);
module.exports = Rest;
