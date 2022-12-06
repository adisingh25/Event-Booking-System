const Event = require("../models/event");
const User = require("../models/user");

exports.createEvent = async (req, res) => {
  console.log(req);
  try {
    const { organizationName, purpose, start, end, theme, email, fooding } =
      req.body();

    if (!email) {
      return res.status(401).json({
        status: 401,
        message: "Please provide valid user email",
      });
    }
    if (!organizationName || !purpose || !start || !end || !theme || !fooding) {
      return res.status(401).json({
        status: 401,
        message: "Please provide all required details",
      });
    }

    const event = await Event.create({
      organizationName,
      purpose,
      from,
      to,
      theme,
      email,
      fooding,
    });

    return res.status(200).json({
      status: 200,
      message: "Event created successfully",
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

  const { email } = req.body;

  try {
    const events = await Event.find({ userId: email });

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
  console.log(req);
  const { email, theme, fooding } = req.body;

  try {
    const event = await Event.findOne({ userId: email });

    event.theme = theme;
    event.fooding = fooding;

    event.save();
    res.status(200).json({
      status: 200,
      message: "Event updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      status: 400,
      message: "Something went wrong",
    });
  }
};

exports.deleteEvent = async (req, res) => {
  console.log(req.body);

  const { email } = req.body;

  try {
    await Event.remove({ userId: email });
    res.status(200).json({
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
