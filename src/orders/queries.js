const getOrder = "SELECT * FROM order";
const getOrderById = "SELECT * FROM order WHERE id = $1";
const checkIfEmailExists = "SELECT s FROM order s WHERE s.email = $1";
const addOrder = "INSERT INTO order (name, email, position, access_level, phone_number) VALUES ($1, $2, $3, $4, $5)";
const deleteOrder = "DELETE FROM order WHERE id = $1";
const editOrder = "UPDATE order SET name = $1 WHERE id = $2";


module.exports = {
 getOrder,
 getOrderById,
 checkIfEmailExists,
 addOrder,
 deleteOrder,
 editOrder
};
