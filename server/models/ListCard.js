const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: { type: String },
  cover: { type: String },
  desc: { type: String },
  url: { type: String }
})

module.exports = mongoose.model('ListCard', schema)
