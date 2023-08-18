const { Router } = require("express");
const controller = require("./controller");

const router = Router();

// All
router.get("/", controller.getOrder);
router.post("/", controller.getOrder);

// Single
router.get("/:id", controller.getOrderById);
router.put("/:id", controller.editOrder);
router.delete("/:id", controller.deleteOrder);

module.exports = router;
