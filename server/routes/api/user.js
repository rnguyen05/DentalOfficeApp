const router = require("express").Router();
const userController = require("../../controllers/userController");

router.post("/signup", userController.create);
router.post("/login", userController.findAll);
router.post("/getUser", userController.findOne);
// router.put("/:id", userController.update);
// router.delete("/:id", userController.remove);

module.exports = router;
