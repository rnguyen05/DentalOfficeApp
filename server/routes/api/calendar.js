const router = require("express").Router();
const calendarController = require("../../controllers/calendarController");

router.post("/", calendarController.create);
router.get("/", calendarController.findAll);

module.exports = router;
