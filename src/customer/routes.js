const { Router } = require("express");
const controller = require("./controller");

const router = Router();

// All
router.get("/", controller.getCustomer);
router.post("/", controller.getCustomer);

// Single
router.get("/:id", controller.getCustomerById);
router.put("/:id", controller.editCustomer);
router.delete("/:id", controller.deleteCustomer);

module.exports = router;
