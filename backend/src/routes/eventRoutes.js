const express = require("express");
const {
  getEvents,
  getEventById,
  createEvent,
} = require("../controllers/eventController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getEvents);
router.get("/:id", getEventById);
router.post("/", authMiddleware, createEvent); // Protect event creation

module.exports = router;
