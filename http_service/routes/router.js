const express = require('express');
const router = express.Router();

/**
 * Imports Controllers
 */
const write_modbus = require('../controller/index');

/**
 * Requests
 */
router.get('/writemodbus', write_modbus.write)
router.get('/stopmodbus', write_modbus.stopmodbus)
router.get('/runmodbus', write_modbus.runmodbus)

module.exports = router;