const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const User = require("../models/User");
const Role = require("../models/roles");

const verifyToken = async (req, res, next) => {
  let token = req.headers["Authorization"];
  console.log(token);
  if (!token) return res.status(403).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, SECRET);
    req.userId = decoded.id;

    const user = await User.findById(req.userId, { password: 0 });
    if (!user) return res.status(404).json({ message: "No user found" });

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized!" });
  }
};

const isuserFinal = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "userFinal") {
        next();
        return;
      }
    }

    return res.status(403).json({ message: "Require user Final Role!" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "admin") {
        next();
        return;
      }
    }

    return res.status(403).json({ message: "Require Admin Role!" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error });
  }
};

const isuserTech = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "userTech") {
        next();
        return;
      }
    }

    return res.status(403).json({ message: "Require user Tech Role!" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error });
  }
};

module.exports = { isAdmin, isuserFinal, isuserTech, verifyToken };
