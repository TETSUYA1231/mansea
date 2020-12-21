const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  subcateId: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Subcate' }],
  title: { type: String },
  desc: { type: String },
  body: { type: String },
  cover: { type: String }
}, {
  timestamps: true
})

module.exports = mongoose.model('Article', schema)
