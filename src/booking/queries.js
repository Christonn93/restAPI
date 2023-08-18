const getBooking = "SELECT * FROM booking";
const getBookingById = "SELECT * FROM booking WHERE id = $1";
const checkIfBookingExists = "SELECT s FROM booking s WHERE s.email = $1";
const addBooking = "INSERT INTO booking (name, email, position, access_level, phone_number) VALUES ($1, $2, $3, $4, $5)";
const deleteBooking = "DELETE FROM booking WHERE id = $1";
const editBooking = "UPDATE booking SET name = $1 WHERE id = $2";

module.exports = {
 getBooking,
 getBookingById,
 checkIfBookingExists,
 addBooking,
 deleteBooking,
 editBooking,
};
