const pool = require("../../database");
const queries = require("./queries");

// All bookings
const getRecipe = (req, res) => {
 pool.query(queries.getRecipe, (error, results) => {
  if (error) throw error;
  res.status(200).json(results.rows);
 });
};

// Single booking
const getRecipeById = (req, res) => {};

const addRecipe = (req, res) => {};

const editRecipe = (req, res) => {};

const deleteRecipe = (req, res) => {};

// Exporting modules
module.exports = {
 getRecipe,
 getRecipeById,
 addRecipe,
 editRecipe,
 deleteRecipe,
};
