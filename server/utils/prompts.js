
const systemPrompt = `You are a Travel Companion AI. Your goal is to help users explore cities, 
plan multi-day itineraries, provide travel tips, and give relevant information
like events, weather, and maps. Always return responses strictly in JSON format 
when asked for itineraries.
`;

/**
 * Zero-Shot User Prompt Generator
 * @param {string} city - City name
 * @param {string} startDate - Trip start date
 * @returns {string} user prompt
 */
const createZeroShotPrompt = (city, startDate) => {
  return `
Plan a detailed ${city} trip starting from ${startDate}. 
Include day-wise itinerary with activities, tips, and optional sightseeing suggestions.
Return strictly in JSON format as:
{
  "city": "<city>",
  "startDate": "<date>",
  "itinerary": [
    { "day": 1, "activities": ["activity1", "activity2"], "tips": "..." }
  ]
}
`;
};

/**
 * Dynamic User Prompt Generator
 * @param {string} city - City name
 * @param {string} startDate - Trip start date
 * @param {Array} preferences - user preferences
 * @returns {string} user prompt
 */
const createDynamicPrompt = (city, startDate, preferences = []) => {
  return `
Plan a trip to ${city} starting on ${startDate}.
User preferences: ${preferences.join(', ')}.
Return a structured JSON itinerary (3 days) with activities and tips.
`;
};

module.exports = { systemPrompt, createZeroShotPrompt, createDynamicPrompt };
