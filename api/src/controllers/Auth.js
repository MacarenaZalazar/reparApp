const User = require("../models/User");
const Role = require("../models/roles");

const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

const signUp = async (req, res) => {
  try {
    // Getting the Request Body
    const { userName, mail, password, roles } = req.body;
    // Creating a new User Object
    const newUser = new User({
      userName,
      mail,
      password: await User.encryptPassword(password),
    });

    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);

    // Saving the User Object in Mongodb
    const savedUser = await newUser.save();

    // Create a token
    const token = jwt.sign({ id: savedUser._id }, SECRET, {
      expiresIn: 86400, // 24 hours
    });

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const signin = async (req, res) => {
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

module.exports = { signUp, signin };
