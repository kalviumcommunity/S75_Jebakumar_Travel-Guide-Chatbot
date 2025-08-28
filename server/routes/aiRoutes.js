const express = require('express');
const router = express.Router();
const { systemUserPromptHandler, zeroShotHandler } = require('../controllers/aiController');

// System & User Prompt endpoint
router.post('/generate', systemUserPromptHandler);

// Zero-Shot Prompting endpoint
router.post('/zero-shot', zeroShotHandler);

module.exports = router;
