const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  organizationName: {
    type: String,
    required: [true, "Please send a valid name"],
  },
  purpose: {
    type: String,
    required: [true, "Please send a purpose"],
  },
  start: {
    type: Date,
    required: [true, "Event start date is required"],
  },
  end: {
    type: Date,
    required: [true, "Event end date is required"],
  },
  theme: {
    type: String,
    required: [true, "Theme is required"],
  },
  userId: String,
  fooding: Boolean,
});

module.exports = mongoose.model("Event", eventSchema);
