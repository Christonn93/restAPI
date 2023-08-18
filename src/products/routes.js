const { Router } = require("express");
const controller = require("./controller");

const router = Router();

// All
router.get("/", controller.getProduct);
router.post("/", controller.getProduct);

// Single
router.get("/:id", controller.getProductById);
router.put("/:id", controller.editProduct);
router.delete("/:id", controller.deleteProduct);

module.exports = router;
