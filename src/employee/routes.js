const { Router } = require("express");
const controller = require("./controller");

const router = Router();

// All
router.get("/", controller.getEmployee);
router.post("/", controller.addNewEmployee);

// Single
router.get("/:id", controller.getEmployeeById);
router.put("/:id", controller.editEmployee);
router.delete("/:id", controller.removeEmployee);

module.exports = router;
