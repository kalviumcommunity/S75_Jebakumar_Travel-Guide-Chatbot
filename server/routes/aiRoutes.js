const express = require('express');
const router = express.Router();
const {
  zeroShotHandler,
  oneShotHandler,
  multiShotHandler,
  dynamicPromptHandler,
  chainOfThoughtHandler
} = require('../controllers/aiController');

router.post('/zero-shot', zeroShotHandler);
router.post('/one-shot', oneShotHandler);
router.post('/multi-shot', multiShotHandler);
router.post('/dynamic-prompt', dynamicPromptHandler);
router.post('/chain-of-thought', chainOfThoughtHandler);

module.exports = router;
