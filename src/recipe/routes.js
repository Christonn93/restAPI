const { Router } = require("express");
const controller = require("./controller");

const router = Router();

// All
router.get("/", controller.getRecipe);
router.post("/", controller.getRecipe);

// Single
router.get("/:id", controller.getRecipeById);
router.put("/:id", controller.editRecipe);
router.delete("/:id", controller.deleteRecipe);

module.exports = router;
