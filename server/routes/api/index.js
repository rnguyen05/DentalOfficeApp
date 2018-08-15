const router = require("express").Router();
const calendarRoutes = require("./calendar");
const scheduleRoutes = require("./schedule");
const userRoutes = require("./user");
const messageRoutes = require("./message");
const appointmentRoutes = require("./appointment");

// calendar routes
router.use("/calendar", calendarRoutes);
router.use("/schedule", scheduleRoutes);
router.use("/user", userRoutes);
router.use("/message", messageRoutes);
router.use("/appointment", appointmentRoutes);

module.exports = router;
