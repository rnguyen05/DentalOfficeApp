const router = require("express").Router();
const scheduleController = require("../../controllers/scheduleController");

router.post("/", scheduleController.create);
router.get("/", scheduleController.findAll);
router.put("/:id", scheduleController.update);
router.delete("/:id", scheduleController.remove);

module.exports = router;
