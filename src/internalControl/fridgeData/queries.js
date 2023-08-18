const getFridgeData = "SELECT * FROM fridge_data";
const getFridgeDataById = "SELECT * FROM fridge_data WHERE id = $1";
const addFridgeData = "INSERT INTO fridge_data (name, email, position, access_level, phone_number) VALUES ($1, $2, $3, $4, $5)";
const deleteFridgeData = "DELETE FROM fridge_data WHERE id = $1";
const editFridgeData = "UPDATE fridge_data SET name = $1 WHERE id = $2";

module.exports = {
 getFridgeData,
 getFridgeDataById,
 addFridgeData,
 deleteFridgeData,
 editFridgeData,
};
