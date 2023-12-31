const pool = require("../../database");
const queries = require("./queries");

const getUsers = (req, res) => {
 pool.query(queries.getUsers, (error, results) => {
  if (error) throw error;
  res.status(200).json(results.rows);
 });
};

const getUsersById = (req, res) => {
 const id = parseInt(req.params.id);
 pool.query(queries.getUsersById, [id], (error, results) => {
  if (error) throw error;
  res.status(200).json(results.rows);
 });
};

module.exports = {
 getUsers,
 getUsersById,
};
