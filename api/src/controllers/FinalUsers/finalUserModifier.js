const User = require("../../models/User");
const UserF = require("../../models/FinalUser");

const finalUserModifier = async (req, res, next) => {
  const UserFSession = await UserF.startSession();
  const { id } = req.params;
  // const user = req.body;
  const { name, lastName, image, phone, mail, zone } = req.body;
  try {
    await UserFSession.withTransaction(async () => {
      const {user} = await UserF.findByIdAndUpdate(id, { zone });
      await User.findByIdAndUpdate(user, {
        name,
        lastName,
        image,
        phone,
        mail,
      });
    });
    UserFSession.endSession();
    res.send("Usuario modificado correctamente");
  } catch (err) {
    UserFSession.endSession();
    next({ message: err?.message, status: 404 });
  }
};

module.exports = { finalUserModifier };
