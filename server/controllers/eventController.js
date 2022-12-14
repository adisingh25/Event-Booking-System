const Event = require("../models/event");
const user = require("../models/user");
const User = require("../models/user");

exports.home = async(req, res) => {
  res.status(200).json({
    "success": "ok"
  })
}
exports.createEvent = async (req, res) => {
  console.log(req.body);
  try {
    const { organizationName, purpose, start, end, theme, userId, fooding } =
      req.body;

    if (!userId) {
      return res.status(401).json({
        status: 401,
        message: "Please provide valid user email",
      });
    }

    const existingEvent = await Event.findOne({userId: userId})
    console.log(existingEvent);
    if(existingEvent != null){
      return res.status(401).json({
        message: "You cannot book mulitple event at a time"
      })
    }
    if (!organizationName || !purpose || !start || !end || !theme) {
      return res.status(401).json({
        status: 401,
        message: "Please provide all required details",
      });
    }

    const event = await Event.create({
      organizationName,
      purpose,
      start,
      end,
      theme,
      userId,
      fooding,
    });

    console.log(event);

    return res.status(200).json({
      status: 200,
      message: "Event created successfully",
      event
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      status: 401,
      message: "Something went wrong",
    });
  }
};

exports.getEvent = async (req, res) => {
  console.log(req);

  const { userId } = req.body;

  try {
    const events = await Event.findOne({ userId: userId });

    console.log(events);
    return res.status(200).json({
      status: 200,
      message: "All events by the user fetched successfully",
      events,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      status: 400,
      message: "Something went wrong",
    });
  }
};

//patch
exports.updateEvent = async (req, res) => {
  // console.log(req);
  const { userId, theme, fooding } = req.body;
  console.log(userId, theme, fooding);

  try {
    await Event.updateOne({userId: userId}, {theme: theme, fooding: fooding})
    res.status(200).json({
      status: 200,
      message: "Event updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      error,
      status: 400,
      message: "Something went wrong",
    });
  }
};

exports.deleteEvent = async (req, res) => {
  console.log(req.body);

  const { email } = req.body;

  try {
    let deletedEvent = await Event.remove({ userId: email });
    res.status(200).json({
      deletedEvent,
      status: 200,
      message: "Event deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      status: 400,
      message: "Something went wrong",
    });
  }
};
