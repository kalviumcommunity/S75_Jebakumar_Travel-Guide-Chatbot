// services/aiService.js

const { systemPrompt, createZeroShotPrompt } = require('../utils/prompts');

/**
 * Generate itinerary using Zero-Shot Prompting
 */
const generateZeroShotTripPlan = async (city, startDate) => {
  const userPrompt = createZeroShotPrompt(city, startDate);

  console.log('System Prompt:', systemPrompt);
  console.log('User Prompt (Zero-Shot):', userPrompt);

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
 */
const generateOneShotTripPlan = async (city, startDate) => {
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
 * Generate itinerary using Multi-Shot Prompting
 */
const generateMultiShotTripPlan = async (city, startDate) => {
  const examples = [
    {
      city: 'ExampleCity1',
      startDate: '2025-09-01',
      itinerary: [
        { day: 1, activities: ['Museum visit'], tips: ['Carry water'] },
        { day: 2, activities: ['City walk'], tips: ['Use sunscreen'] }
      ]
    },
    {
      city: 'ExampleCity2',
      startDate: '2025-10-01',
      itinerary: [
        { day: 1, activities: ['Park visit'], tips: ['Wear comfortable shoes'] },
        { day: 2, activities: ['Local market'], tips: ['Carry snacks'] }
      ]
    }
  ];

  const userPrompt = `
Plan a ${city} trip starting on ${startDate}.
Follow these examples exactly:
${JSON.stringify(examples)}
Provide a structured 3-day itinerary with activities and tips.
`;

  console.log('System Prompt:', systemPrompt);
  console.log('User Prompt (Multi-Shot):', userPrompt);

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
 * Generate itinerary using Dynamic Prompting
 */
const generateDynamicPromptTripPlan = async (city, startDate, preferences = []) => {
  const userPrompt = `
Plan a trip to ${city} starting on ${startDate}.
User preferences: ${preferences.join(', ')}.
Return a structured JSON itinerary (3 days) with activities and tips.
`;

  console.log('System Prompt:', 'Dynamic Prompting System Message');
  console.log('User Prompt (Dynamic):', userPrompt);

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
  generateOneShotTripPlan,
  generateMultiShotTripPlan,
  generateDynamicPromptTripPlan
};
