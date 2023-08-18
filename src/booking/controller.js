const pool = require("../../database");
const queries = require("./queries");

// All booking
const getBooking = (req, res) => {
 pool.query(queries.getBooking, (error, results) => {
  if (error) throw error;
  res.status(200).json(results.rows);
 });
};

// Single booking
const getBookingById = (req, res) => {};

const addBooking = (req, res) => {};

const editBooking = (req, res) => {};

const deleteBooking = (req, res) => {};

// Exporting modules
module.exports = {
 getBooking,
 getBookingById,
 addBooking,
 editBooking,
 deleteBooking,
};
