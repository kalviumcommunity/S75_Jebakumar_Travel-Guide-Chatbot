// routes/aiRoutes.js
const express = require('express');
const router = express.Router();
const {
  zeroShotHandler,
  oneShotHandler,
  multiShotHandler,
  dynamicPromptHandler,
  chainOfThoughtHandler
} = require('../controllers/aiController');

// Zero-Shot
router.post('/zero-shot', zeroShotHandler);

// One-Shot
router.post('/one-shot', oneShotHandler);

// Multi-Shot
router.post('/multi-shot', multiShotHandler);

// Dynamic Prompt
router.post('/dynamic-prompt', dynamicPromptHandler);

// Chain-of-Thought
router.post('/chain-of-thought', chainOfThoughtHandler);

module.exports = router;
