const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

const logIn = async (req, res) => {
  try {
    // Request body email can be an email or username
    const userFound = await User.findOne({ mail: req.body.mail }).populate(
      "roles"
    );

    if (!userFound) return res.status(400).json({ message: "User Not Found" });

    const matchPassword = await User.comparePassword(
      req.body.password,
      userFound.password
    );

    if (!matchPassword)
      return res.status(401).json({
        token: null,
        message: "Invalid Password",
      });

    const token = jwt.sign({ id: userFound._id }, SECRET, {
      expiresIn: 86400, // 24 hours
    });

    res.json({ token });
  } catch (error) {
    console.log(error);
  }
};
module.exports = logIn;
