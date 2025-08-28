const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  savedTrips: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Trip' }]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
