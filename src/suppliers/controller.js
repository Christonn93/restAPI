const pool = require("../../database");
const queries = require("./queries");

// All bookings
const getSupplier = (req, res) => {
 pool.query(queries.getSupplier, (error, results) => {
  if (error) throw error;
  res.status(200).json(results.rows);
 });
};

// Single booking
const getSupplierById = (req, res) => {};

const addSupplier = (req, res) => {};

const editSupplier = (req, res) => {};

const deleteSupplier = (req, res) => {};

// Exporting modules
module.exports = {
 getSupplier,
 getSupplierById,
 addSupplier,
 editSupplier,
 deleteSupplier,
};
