const {
  generateZeroShotTripPlan,
  generateOneShotTripPlan,
  generateMultiShotTripPlan,
  generateDynamicPromptTripPlan
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

/**
 * Multi-Shot Endpoint Handler
 */
const multiShotHandler = async (req, res) => {
  try {
    const { city, startDate } = req.body;
    const tripPlan = await generateMultiShotTripPlan(city, startDate);
    res.json(tripPlan);
  } catch (error) {
    console.error('Multi-Shot generation failed:', error);
    res.status(500).json({ error: 'Failed to generate Multi-Shot itinerary' });
  }
};

/**
 * Dynamic Prompt Endpoint Handler
 */
const dynamicPromptHandler = async (req, res) => {
  try {
    const { city, startDate, preferences } = req.body;
    const tripPlan = await generateDynamicPromptTripPlan(city, startDate, preferences || []);
    res.json(tripPlan);
  } catch (error) {
    console.error('Dynamic Prompt generation failed:', error);
    res.status(500).json({ error: 'Failed to generate Dynamic Prompt itinerary' });
  }
};

module.exports = {
  zeroShotHandler,
  oneShotHandler,
  multiShotHandler,
  dynamicPromptHandler
};
