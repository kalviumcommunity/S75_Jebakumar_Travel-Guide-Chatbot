// services/aiService.js
const { systemPrompt, createUserPrompt } = require('../utils/prompts');

/**
 * generateZeroShotTripPlan
 * Zero-Shot Prompting: AI generates itinerary purely from instructions, no examples given
 * @param {string} city
 * @param {string} startDate
 * @returns {Object} structured trip JSON
 */
const generateZeroShotTripPlan = async (city, startDate) => {
  // Dynamic user prompt for Zero-Shot
  const userPrompt = createUserPrompt(city, startDate);

  // Log prompts for verification
  console.log('--- SYSTEM PROMPT (Zero-Shot) ---\n', systemPrompt);
  console.log('--- USER PROMPT (Zero-Shot) ---\n', userPrompt);

  // Dummy structured JSON simulating Zero-Shot response
  return {
    city,
    startDate,
    itinerary: [
      { day: 1, activities: ['Arrival & hotel check-in', 'Explore nearby market'], tips: 'Keep luggage light' },
      { day: 2, activities: ['Visit historical sites', 'Evening at local park'], tips: 'Take camera for photos' },
      { day: 3, activities: ['Museum tour', 'Local cuisine tasting'], tips: 'Try street food safely' }
    ]
  };
};

module.exports = { generateZeroShotTripPlan };
