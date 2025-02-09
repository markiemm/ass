/**
 * Used for global data management
 */

// Old data
const { JsonDataEngine } = require('@tycrek/papito');

// Actual data engine
const { dataEngine } = require('./config.json');
const { _ENGINE_ } = require(dataEngine);

module.exports = _ENGINE_(new JsonDataEngine());
