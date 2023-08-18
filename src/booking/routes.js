const { Router } = require("express");
const controller = require("./controller");

const router = Router();

// All
router.get("/", controller.getBooking);
router.post("/", controller.getBooking);

// Single
router.get("/:id", controller.getBookingById);
router.put("/:id", controller.editBooking);
router.delete("/:id", controller.deleteBooking);

module.exports = router;
