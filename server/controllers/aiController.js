const {
  generateZeroShotTripPlan,
  generateOneShotTripPlan
} = require('../services/aiService');

/**
 * Zero-Shot Endpoint Handler
 */
const zeroShotHandler = async (req, res) => {
  try {
    const { city, startDate } = req.body;
    const tripPlan = await generateZeroShotTripPlan(city, startDate);
    res.json(tripPlan);
  } catch (error) {
    console.error('Zero-Shot generation failed:', error);
    res.status(500).json({ error: 'Failed to generate Zero-Shot itinerary' });
  }
};

/**
 * One-Shot Endpoint Handler
 */
const oneShotHandler = async (req, res) => {
  try {
    const { city, startDate } = req.body;
    const tripPlan = await generateOneShotTripPlan(city, startDate);
    res.json(tripPlan);
  } catch (error) {
    console.error('One-Shot generation failed:', error);
    res.status(500).json({ error: 'Failed to generate One-Shot itinerary' });
  }
};

module.exports = {
  zeroShotHandler,
  oneShotHandler
};
