const User = require("../models/User");

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    const user = await User.findOne({ userName: req.body.userName });
    if (user) return res.status(200).json({ message: "El usuario ya existe" });

    const email = await User.findOne({ mail: req.body.mail });
    if (email) return res.status(200).json({ message: "Email ya registrado" });
    next();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { checkDuplicateUsernameOrEmail };
