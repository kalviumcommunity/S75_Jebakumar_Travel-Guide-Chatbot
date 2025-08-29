// routes/aiRoutes.js

const express = require('express');
const router = express.Router();

// Import controller handlers
const {
  zeroShotHandler,
  oneShotHandler
} = require('../controllers/aiController');

// --------------------
// AI Prompt Endpoints
// --------------------

// Zero-Shot Prompt
// POST /api/ai/zero-shot
router.post('/zero-shot', zeroShotHandler);

// One-Shot Prompt
// POST /api/ai/one-shot
router.post('/one-shot', oneShotHandler);

// Future endpoints (Multi-Shot, Chain-of-Thought, etc.) can be added here
// e.g., router.post('/multi-shot', multiShotHandler);

module.exports = router;
