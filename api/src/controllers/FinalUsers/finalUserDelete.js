const UserF = require("../../models/FinalUser");

const deleteUserF = async (req, res, next) => {
  const UserFSession = await UserF.startSession();
  const { id } = req.params;
  try {
    await UserFSession.withTransaction(async () => {
      await UserF.findByIdAndDelete(id);
    });
    UserFSession.endSession();
    res.send("Usuario tecnico eliminado correctamente");
  } catch (error) {
    UserFSession.endSession();
    next({ message: error?.message, status: 404 });
  }
};

module.exports = { deleteUserF };
