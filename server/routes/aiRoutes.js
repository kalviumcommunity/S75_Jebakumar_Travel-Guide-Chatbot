// routes/aiRoutes.js
const express = require('express');
const router = express.Router();

// Import controller handlers
const {
  zeroShotHandler,
  oneShotHandler,
  multiShotHandler,
  dynamicPromptHandler
} = require('../controllers/aiController');

// Zero-Shot
router.post('/zero-shot', zeroShotHandler);

// One-Shot
router.post('/one-shot', oneShotHandler);

// Multi-Shot
router.post('/multi-shot', multiShotHandler);

// Dynamic Prompt
router.post('/dynamic-prompt', dynamicPromptHandler);

module.exports = router;
