const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("passport");

router.post("/signup", userController.create);
router.post("/login", userController.findOne);
router.get("/logout", userController.logout);

// router.get("/login/facebook", userController.facebook);
// handle the callback after facebook has authenticated the user
// router.get(
//   "/login/facebook/callback",
//   passport.authenticate("facebook", {
//     successRedirect: "/home",
//     failureRedirect: "/"
//   })
// );
module.exports = router;
