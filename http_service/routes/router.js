const express = require('express');
const router = express.Router();

/**
 * Imports Controllers
 */
const control = require('../controller/index');

/**
 * Requests
 */
router.get('/update-modebus', control.update)

module.exports = router;