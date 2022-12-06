const express = require("express");
const {
  createEvent,
  deleteEvent,
  updateEvent,
  getEvent,
} = require("../controllers/eventController");
const router = express.Router();

router.route("/create").post(createEvent);
router.route("/get").get(getEvent);
router.route("/update").patch(updateEvent);
router.route("/delete").delete(deleteEvent);

module.exports = [router];
