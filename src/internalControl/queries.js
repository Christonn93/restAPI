const getInternalControl = "SELECT * FROM internalControl";
const getInternalControlById = "SELECT * FROM internalControl WHERE id = $1";
const checkIfEmailExists = "SELECT s FROM internalControl s WHERE s.email = $1";
const addInternalControl = "INSERT INTO internalControl (name, email, position, access_level, phone_number) VALUES ($1, $2, $3, $4, $5)";
const deleteInternalControl = "DELETE FROM internalControl WHERE id = $1";
const editInternalControl = "UPDATE internalControl SET name = $1 WHERE id = $2";

module.exports = {
 getInternalControl,
 getInternalControlById,
 checkIfEmailExists,
 addInternalControl,
 deleteInternalControl,
 editInternalControl,
};
