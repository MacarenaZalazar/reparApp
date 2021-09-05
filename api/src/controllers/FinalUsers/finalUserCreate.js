const FinalUser = require("../../models/FinalUser");
const UserController = require("../Users");

const finalUserCreate = async (req, res, next) => {
  const UserSession = await User.startSession();
  // UserSession.startTransaction();
  const user = req.body;
  try {
    await UserSession.withTransaction(async () => {
      const newUser = await UserController.createNewUser(user);
      await FinalUser.create({
        user: newUser._id,
        zone: user.zone,
        score: user.score,
      });
    });
    UserSession.endSession();
    res.send({message: "Se creo correctamente el usuario final"});
  } catch (error) {
    UserSession.endSession();
    next({ message: error?.message, status: 404 });
  }
};

module.exports = finalUserCreate;
