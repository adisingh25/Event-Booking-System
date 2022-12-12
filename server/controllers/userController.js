const User = require("../models/user");
const bcrypt = require("bcrypt")

exports.signupUser = async (req, res, next) => {
  //include addressPoint also
  try {
    console.log(req.body);
    const { name, phoneNumber, email, password } = req.body;

    if (!email || !name || !phoneNumber || !password) {
      return res.status(401).json({
        status: 401,
        message:
          "Please provide all required details",
      });
    }
    const user = await User.create({ name, phoneNumber, email, password });

    const token = user.getJwtToken();
    console.log(`User token is ${token}`);
    return res.status(200).json({
      status: 200,
      message: "User is added to database successfully.",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: "Something went wrong" });
  }
};

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  console.log(password);
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({
      status: 401,
      message: "No such user exist, please register first",
    });
  }

//   const hashedPassword = await bcrypt.hash(password, 10)
  const matchedPassword = await bcrypt.compare(password, user.password)
  console.log(matchedPassword);

  if (!matchedPassword) {
    return res.status(401).json({
      status: 401,
      message: "Wrong password please try again",
    });
  }

  const token = user.getJwtToken();

  return res.status(200).json({
    status: 200,
    message: "Login Successful",
    name: user.name,
    email: user.email,
    token,
  });
};
