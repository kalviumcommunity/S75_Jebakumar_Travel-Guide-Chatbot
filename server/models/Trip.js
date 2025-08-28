const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // optional for now
  city: String,
  startDate: Date,
  itinerary: Object, // structured JSON itinerary
}, { timestamps: true });

module.exports = mongoose.model('Trip', tripSchema);
