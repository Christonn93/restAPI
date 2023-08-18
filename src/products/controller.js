const pool = require("../../database");
const queries = require("./queries");

// All Products
const getProduct = (req, res) => {
 pool.query(queries.getProduct, (error, results) => {
  if (error) throw error;
  res.status(200).json(results.rows);
 });
};

// Single Product
const getProductById = (req, res) => {};

const addProduct = (req, res) => {};

const editProduct = (req, res) => {};

const deleteProduct = (req, res) => {};

// Exporting modules
module.exports = {
 getProduct,
 getProductById,
 addProduct,
 editProduct,
 deleteProduct,
};
