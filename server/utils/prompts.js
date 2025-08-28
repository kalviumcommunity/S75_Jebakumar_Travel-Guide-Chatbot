// utils/prompts.js
/**
 * System Prompt:
 * Provides the AI with its role and behavior as a Travel Companion.
 */
const systemPrompt = `
You are a Travel Companion AI. Your goal is to help users explore cities, 
plan multi-day itineraries, provide travel tips, and give relevant information
like events, weather, and maps. Always return responses strictly in JSON format 
when asked for itineraries.
`;

/**
 * Dynamic User Prompt Generator
 * @param {string} city - City name
 * @param {string} startDate - Trip start date
 * @returns {string} user prompt
 */
const createUserPrompt = (city, startDate) => {
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

module.exports = { systemPrompt, createUserPrompt };
