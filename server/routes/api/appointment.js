const router = require("express").Router();
const appointmentController = require("../../controllers/appointmentController");

router.post("/new", appointmentController.create);
// router.get("/", appointmentController.findAll);

module.exports = router;
