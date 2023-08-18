const pool = require("../../database");
const queries = require("./queries");

// All Order
const getOrder = (req, res) => {
 pool.query(queries.getOrder, (error, results) => {
  if (error) throw error;
  res.status(200).json(results.rows);
 });
};

// Single Order
const getOrderById = (req, res) => {};

const addOrder = (req, res) => {};

const editOrder = (req, res) => {};

const deleteOrder = (req, res) => {};

// Exporting modules
module.exports = {
 getOrder,
 getOrderById,
 addOrder,
 editOrder,
 deleteOrder,
};
