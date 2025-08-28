const Trip = require('../models/Trip');
const { generateTripPlan } = require('../services/aiService');

const generateItinerary = async (req, res) => {
  const { city, startDate } = req.body;

  if (!city || !startDate) {
    return res.status(400).json({ success: false, message: 'City and startDate are required' });
  }

  try {
    const itinerary = await generateTripPlan(city, startDate);

    // Save to DB
    const trip = new Trip({
      city,
      startDate,
      itinerary
    });
    await trip.save();

    res.json({ success: true, itinerary });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'AI generation failed' });
  }
};

module.exports = { generateItinerary };
