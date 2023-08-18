const getRecipe = "SELECT * FROM recipe";
const getRecipeById = "SELECT * FROM recipe WHERE id = $1";
const checkIfRecipeExists = "SELECT s FROM recipe s WHERE s.email = $1";
const addRecipe = "INSERT INTO recipe (name, email, position, access_level, phone_number) VALUES ($1, $2, $3, $4, $5)";
const deleteRecipe = "DELETE FROM recipe WHERE id = $1";
const editRecipe = "UPDATE recipe SET name = $1 WHERE id = $2";

module.exports = {
 getRecipe,
 getRecipeById,
 checkIfRecipeExists,
 addRecipe,
 deleteRecipe,
 editRecipe,
};
