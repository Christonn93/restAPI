const getProduct = "SELECT * FROM products";
const getProductById = "SELECT * FROM products WHERE id = $1";
const checkIfProductExists = "SELECT s FROM products s WHERE s.email = $1";
const addProduct = "INSERT INTO products (name, email, position, access_level, phone_number) VALUES ($1, $2, $3, $4, $5)";
const deleteProduct = "DELETE FROM products WHERE id = $1";
const editProduct = "UPDATE products SET name = $1 WHERE id = $2";


module.exports = {
 getProduct,
 getProductById,
 checkIfProductExists,
 addProduct,
 deleteProduct,
 editProduct
};
