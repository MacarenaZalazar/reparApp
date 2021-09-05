const UserT = require("../../models/TechUser");

const deleteUserT = async (req, res, next) => {
  const UserTSession = await UserT.startSession();
  const { id } = req.params;
  try {
    await UserTSession.withTransaction(async () => {
      await UserT.findByIdAndDelete(id);
    });
    UserTSession.endSession();
    res.send("Usuario tecnico eliminado correctamente");
  } catch (error) {
    UserTSession.endSession();
    next({ message: error?.message, status: 404 });
  }
};

module.exports = { deleteUserT };
