const { generateTripPlan, generateZeroShotTripPlan } = require('../services/aiService');

/**
 * POST /api/ai/generate
 * System & User Prompt endpoint
 * Body: { city: "Delhi", startDate: "2025-09-01" }
 */
const systemUserPromptHandler = async (req, res) => {
  try {
    const { city, startDate } = req.body;
    const tripPlan = await generateTripPlan(city, startDate);
    res.json(tripPlan);
  } catch (error) {
    console.error('System/User Prompt generation failed:', error);
    res.status(500).json({ error: 'Failed to generate itinerary' });
  }
};

/**
 * POST /api/ai/zero-shot
 * Zero-Shot Prompting endpoint
 * Body: { city: "Mumbai", startDate: "2025-09-05" }
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

module.exports = { systemUserPromptHandler, zeroShotHandler };
