// services/aiService.js
const { systemPrompt, createUserPrompt } = require('../utils/prompts');

/**
 * generateTripPlan
 * Currently returns dummy itinerary but uses the prompt structure.
 * @param {string} city
 * @param {string} startDate
 * @returns {Object} structured trip JSON
 */
const generateTripPlan = async (city, startDate) => {
  // Generate dynamic user prompt
  const userPrompt = createUserPrompt(city, startDate);

  // Log prompts for verification
  console.log('--- SYSTEM PROMPT ---\n', systemPrompt);
  console.log('--- USER PROMPT ---\n', userPrompt);

  // Dummy structured JSON (replace with AI call later)
  return {
    city,
    startDate,
    itinerary: [
      { day: 1, activities: ['Visit main square', 'Lunch at local cafe'], tips: 'Wear comfortable shoes' },
      { day: 2, activities: ['Museum visit', 'Evening walk by river'], tips: 'Carry water bottle' }
    ]
  };
};

module.exports = { generateTripPlan };
