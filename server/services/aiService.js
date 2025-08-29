// services/aiService.js

const { systemPrompt, createZeroShotPrompt } = require('../utils/prompts');

/**
 * Generate itinerary using Zero-Shot Prompting
 * @param {string} city
 * @param {string} startDate
 * @returns {object} structured JSON itinerary
 */
const generateZeroShotTripPlan = async (city, startDate) => {
  const userPrompt = createZeroShotPrompt(city, startDate);

  console.log('System Prompt:', systemPrompt);
  console.log('User Prompt (Zero-Shot):', userPrompt);

  // Dummy structured JSON response
  return {
    city,
    startDate,
    itinerary: [
      { day: 1, activities: ['Local landmark visit'], tips: ['Take photos'] },
      { day: 2, activities: ['Museum tour'], tips: ['Wear comfortable shoes'] },
      { day: 3, activities: ['Park visit'], tips: ['Carry snacks'] }
    ]
  };
};

/**
 * Generate itinerary using One-Shot Prompting
 * @param {string} city
 * @param {string} startDate
 * @returns {object} structured JSON itinerary
 */
const generateOneShotTripPlan = async (city, startDate) => {
  // Example JSON to guide the AI
  const example = {
    city: 'ExampleCity',
    startDate: '2025-09-01',
    itinerary: [
      { day: 1, activities: ['Visit museum', 'City walk'], tips: ['Carry water'] },
      { day: 2, activities: ['Park visit', 'Local market'], tips: ['Use sunscreen'] }
    ]
  };

  const userPrompt = `
Plan a ${city} trip starting on ${startDate}.
Follow this example format exactly:
${JSON.stringify(example)}
Provide a structured 3-day itinerary with activities and tips.
`;

  console.log('System Prompt:', systemPrompt);
  console.log('User Prompt (One-Shot):', userPrompt);

  // Dummy structured JSON response
  return {
    city,
    startDate,
    itinerary: [
      { day: 1, activities: ['Local landmark visit'], tips: ['Take photos'] },
      { day: 2, activities: ['Museum tour'], tips: ['Wear comfortable shoes'] },
      { day: 3, activities: ['Park visit'], tips: ['Carry snacks'] }
    ]
  };
};

module.exports = {
  generateZeroShotTripPlan,
  generateOneShotTripPlan
};
