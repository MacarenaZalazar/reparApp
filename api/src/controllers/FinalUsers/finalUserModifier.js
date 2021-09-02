const User = require("../../models/User");
const UserF = require("../../models/FinalUser");

const finalUserModifier = async (req, res, next) => {
  const { id } = req.params;
  const { name, lastName, image, phone, mail, zone } = req.body;
  try {
    const IDUSER = await UsersT.findById(id);
    UserF.findByIdAndUpdate(id, { zone });
    User.findByIdAndUpdate(IDUSER.user, { name, lastName, image, phone, mail });
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};

module.exports = { finalUserModifier };
