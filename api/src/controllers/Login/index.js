const User = require("../../models/User");
const UserF = require("../../models/FinalUser");
const UserT = require("../../models/TechUser");
const jwt = require("jsonwebtoken");
const { use } = require("../../routes/login");
const { SECRET } = process.env;

const logIn = async (req, res) => {
  try {
    // Request body email can be an email or username

    // const typeUser = await User.findOne({ mail: req.body.mail }).populate(
    //   "roles"
    // );
    let userFound = await User.findOne({ mail: req.body.mail }).populate(
      "roles"
    );

    if (userFound.roles[0].name === "userFinal") {
      const userFinal = await UserF.find({ user: { $eq: userFound._id } });

      console.log(userFinal);

      userFound.zone = userFinal[0].zone;
    }
    if (userFound.roles[0].name === "userTech") {
      const userTech = await UserT.find({ user: { $eq: userFound._id } });

      userFound.workZones = userTech[0].workZones;
    }

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

    if (userFound.roles[0].name === "userFinal") {
      res.json({
        token,
        id: userFound._id,
        roles: userFound.roles,
        zone: userFound.zone,
      });
    }
    if (userFound.roles[0].name === "userTech") {
      res.json({
        token,
        id: userFound._id,
        roles: userFound.roles,
        workZones: userFound.workZones,
      });
    }
    // res.json({ token, userFound });
  } catch (error) {
    console.log(error);
  }
};
module.exports = logIn;
