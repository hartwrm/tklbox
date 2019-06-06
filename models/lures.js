const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lureSchema = new Schema ({
  type: {type: String, enum:['Plastic', 'Top water', 'Crank Bait', 'Jerkbait', 'Swim Bait', 'Jig']},
  name: String,
  conditions: [String],
  img: String,
  qty: {type: Number, min: 0},
  color: String
}, {timestamps: true})

const Lure = mongoose.model('Lure', lureSchema)


module.exports = Lure
