const { Router } = require("express");
const controller = require("./controller");

const router = Router();

// All
router.get("/", controller.getFridgeData);
router.post("/", controller.getFridgeData);

// Single
router.get("/:id", controller.getFridgeDataById);
router.put("/:id", controller.editFridgeData);
router.delete("/:id", controller.deleteFridgeData);

module.exports = router;
