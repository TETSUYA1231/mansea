const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  subName: { type: String },
  icon: { type: String },
  url: { type: String }
})

module.exports = mongoose.model('Card', schema)
