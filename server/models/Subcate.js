const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  subname: { type: String },
  // categoryId: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }
})

module.exports = mongoose.model('Subcate', schema)