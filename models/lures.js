const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lureSchema = new Schema ({
  type: String,
  name: String,
  cond: [String],
  img: String,
  qty: {type: Number, min: 0}
}, {timestamps: true})

const Lure = mongoose.model('Lure', lureSchema)


module.exports = Lure
