const getSupplier = "SELECT * FROM booking";
const getSupplierById = "SELECT * FROM booking WHERE id = $1";
const checkIfSupplierExists = "SELECT s FROM booking s WHERE s.email = $1";
const addSupplier = "INSERT INTO booking (name, email, position, access_level, phone_number) VALUES ($1, $2, $3, $4, $5)";
const deleteSupplier = "DELETE FROM booking WHERE id = $1";
const editSupplier = "UPDATE booking SET name = $1 WHERE id = $2";

module.exports = {
 getSupplier,
 getSupplierById,
 checkIfSupplierExists,
 addSupplier,
 deleteSupplier,
 editSupplier,
};
