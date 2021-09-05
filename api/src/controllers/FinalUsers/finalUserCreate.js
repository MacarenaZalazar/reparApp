const FinalUser = require("../../models/FinalUser");
const UserController = require("../Users");

const finalUserCreate = async (req, res, next) => {
  const session = await FinalUser.startSession();
  // UserSession.startTransaction();
  const user = req.body;
  try {
    await session.withTransaction(async () => {
      const newUser = await UserController.createNewUser(user);
      await FinalUser.create({
        user: newUser._id,
        zone: user.zone,
        score: user.score,
      });
    })
    res.send({message: "Se creo correctamente el usuario final"});
  } catch (error) {
    next({ message: error?.message, status: 404 });
  } finally {
    session.endSession();
  }
};

module.exports = finalUserCreate;
