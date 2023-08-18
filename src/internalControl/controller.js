const pool = require("../../database");
const queries = require("./queries");

// All internalControl
const getInternalControl = (req, res) => {
 pool.query(queries.getInternalControl, (error, results) => {
  if (error) throw error;
  res.status(200).json(results.rows);
 });
};

// Single booking
const getInternalControlById = (req, res) => {};

const addInternalControl = (req, res) => {};

const editInternalControl = (req, res) => {};

const deleteInternalControl = (req, res) => {};

// Exporting modules
module.exports = {
 getInternalControl,
 getInternalControlById,
 addInternalControl,
 editInternalControl,
 deleteInternalControl,
};
