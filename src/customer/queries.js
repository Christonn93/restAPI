const getCustomer = "SELECT * FROM customer";
const getCustomerById = "SELECT * FROM customer WHERE id = $1";
const checkIfEmailExists = "SELECT s FROM customer s WHERE s.email = $1";
const addCustomer = "INSERT INTO customer (name, email, position, access_level, phone_number) VALUES ($1, $2, $3, $4, $5)";
const deleteCustomer = "DELETE FROM customer WHERE id = $1";
const editCustomer = "UPDATE customer SET name = $1 WHERE id = $2";

module.exports = {
 getCustomer,
 getCustomerById,
 checkIfEmailExists,
 addCustomer,
 deleteCustomer,
 editCustomer,
};
