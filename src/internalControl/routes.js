const { Router } = require("express");
const controller = require("./controller");

const router = Router();

// All
router.get("/", controller.getInternalControl);
router.post("/", controller.getInternalControl);

// Single
router.get("/:id", controller.getInternalControlById);
router.put("/:id", controller.editInternalControl);
router.delete("/:id", controller.deleteInternalControl);

module.exports = router;
