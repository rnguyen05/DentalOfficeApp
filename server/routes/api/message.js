const router = require("express").Router();
const messageController = require("../../controllers/messageController");

router.post("/new", messageController.create);

module.exports = router;
