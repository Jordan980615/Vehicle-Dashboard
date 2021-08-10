const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
  
  Make: {type: String, trim:true},
  Model: {type: String, trim:true},
  Price: {type: Number, trim: true},
  Year: {type: Number, trim: true},
  Status: {type:String, require:true, trim:true}


}, {
  timestamps: true,
});

const Vehicle = mongoose.model('vehicle', vehicleSchema);

module.exports = Vehicle;