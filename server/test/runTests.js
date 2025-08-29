
const axios = require('axios');
const samples = require('./evaluationDataset');

const endpoints = [
  '/api/ai/zero-shot',
  '/api/ai/one-shot',
  '/api/ai/multi-shot',
  '/api/ai/dynamic-prompt',
  '/api/ai/chain-of-thought'
];

const baseURL = 'http://localhost:5000';

(async () => {
  console.log('\n=== Starting Evaluation Dataset Tests ===');

  for (const sample of samples) {
    console.log(`\nTesting sample: ${sample.city} (${sample.startDate})`);

    for (const endpoint of endpoints) {
      try {
        const res = await axios.post(baseURL + endpoint, sample);
        const data = res.data;

        if (data.city && data.startDate && Array.isArray(data.itinerary)) {
          console.log(`${endpoint} ✅ Passed`);
        } else {
          console.log(`${endpoint} ❌ Failed: Invalid structure`);
        }
      } catch (error) {
        console.log(`${endpoint} ❌ Error:`, error.message);
      }
    }
  }

  console.log('\n=== Evaluation Dataset Tests Completed ===\n');
})();
