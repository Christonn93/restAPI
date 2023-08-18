const pool = require("../../../database");
const queries = require("./queries");

// All internalControl
const getFridgeData = (req, res) => {
 pool.query(queries.getFridgeData, (error, results) => {
  if (error) throw error;
  res.status(200).json(results.rows);
 });
};

// Single booking
const getFridgeDataById = (req, res) => {};

const addFridgeData = (req, res) => {};

const editFridgeData = (req, res) => {};

const deleteFridgeData = (req, res) => {};

// Exporting modules
module.exports = {
 getFridgeData,
 getFridgeDataById,
 addFridgeData,
 editFridgeData,
 deleteFridgeData,
};
