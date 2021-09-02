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
  if (
    !workZones &&
    !jobTypes &&
    !name &&
    !lastName &&
    !mail &&
    !userName &&
    !password
  ) {
    res.sendStatus(400);
  } else {
    try {
      const IDUSER = await UsersT.findById(id);
      await UsersT.findByIdAndUpdate(id, {
        workZones,
        jobTypes,
        qualification,
      });
      await User.findByIdAndUpdate(IDUSER.user, {
        name,
        lastName,
        image,
        phone,
        mail,
      });
      res.sendStatus(200);
    } catch (err) {
      next(err);
    }
  }
};

module.exports = techUserModifier;
