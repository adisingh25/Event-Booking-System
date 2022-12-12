const express = require("express");
const {
  createEvent,
  deleteEvent,
  updateEvent,
  getEvent,
  home
} = require("../controllers/eventController");
const router = express.Router();

router.route("/").get(home)
router.route("/create").post(createEvent);
router.route("/get").post(getEvent);
router.route("/update").patch(updateEvent);
router.route("/delete").delete(deleteEvent);

module.exports = [router];
