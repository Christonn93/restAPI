const getProduct = "SELECT * FROM product";
const getProductById = "SELECT * FROM product WHERE id = $1";
const checkIfProductExists = "SELECT s FROM product s WHERE s.email = $1";
const addProduct = "INSERT INTO product (name, email, position, access_level, phone_number) VALUES ($1, $2, $3, $4, $5)";
const deleteProduct = "DELETE FROM product WHERE id = $1";
const editProduct = "UPDATE product SET name = $1 WHERE id = $2";


module.exports = {
 getProduct,
 getProductById,
 checkIfProductExists,
 addProduct,
 deleteProduct,
 editProduct
};
