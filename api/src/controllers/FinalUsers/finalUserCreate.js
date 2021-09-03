const FinalUser = require("../../models/FinalUser");
const User = require("../../models/User");

const finalUserCreate = async (req, res, next) => {
  const UserSession = await User.startSession();
  // UserSession.startTransaction();
  const user = req.body;
  try {
    await UserSession.withTransaction(async () => {
      const newUser = await User.create({
        name: user.name,
        lastName: user.lastName,
        mail: user.mail,
        userName: user.userName,
        password: user.password,
        phone: user.phone,
      });
      await FinalUser.create({
        user: newUser._id,
        zone: user.zone,
        score: user.score,
      });
    });
    UserSession.endSession();
    res.send("Se creo correctamente el usuario final");
  } catch (error) {
    UserSession.endSession();
    next({ message: error?.message, status: 404 });
  }
};

module.exports = finalUserCreate;
