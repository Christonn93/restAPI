const pool = require("../../database");
const queries = require("./queries");

// All Customer
const getCustomer = (req, res) => {
 pool.query(queries.getCustomer, (error, results) => {
  if (error) throw error;
  res.status(200).json(results.rows);
 });
};

// Single Customer
const getCustomerById = (req, res) => {};

const addCustomer = (req, res) => {};

const editCustomer = (req, res) => {};

const deleteCustomer = (req, res) => {};

// Exporting modules
module.exports = {
 getCustomer,
 getCustomerById,
 addCustomer,
 editCustomer,
 deleteCustomer,
};
