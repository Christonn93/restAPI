const { Router } = require("express");
const controller = require("./controller");

const router = Router();

// All
router.get("/", controller.getSupplier);
router.post("/", controller.getSupplier);

// Single
router.get("/:id", controller.getSupplierById);
router.put("/:id", controller.editSupplier);
router.delete("/:id", controller.deleteSupplier);

module.exports = router;
