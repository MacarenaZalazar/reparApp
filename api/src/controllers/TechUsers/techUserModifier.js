const UsersT = require("../../models/TechUser");
const User = require("../../models/User");

const techUserModifier = async (req, res, next) => {
  const { id } = req.params;
  const {
    workZones,
    jobTypes,
    qualification,
    name,
    lastName,
    image,
    phone,
    mail,
  } = req.body;
  try {
    UsersT.findByIdAndUpdate(id);
    User.findByIdAndUpdate(id);
  } catch (err) {
    next(err);
  }
};

module.exports = techUserModifier;
