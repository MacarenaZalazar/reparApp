const FinalUser = require("../../models/FinalUser");
const UserController = require("../Users");
const { SECRET } = process.env;
const jwt = require("jsonwebtoken");
const Role = require("../../models/roles");
const User = require("../../models/User");

const finalUserCreate = async (req, res, next) => {
  const session = await FinalUser.startSession();
  // UserSession.startTransaction();
  try {
    await session.withTransaction(async () => {
      const user = req.body;
      const idRole = await Role.find({ name: { $in: "userFinal" } });

      const newUser = await UserController.createNewUser(user, idRole);
      await FinalUser.create({
        user: newUser._id,
        zone: user.zone,
        score: user.score,
      });
      newUser.password = await User.encryptPassword(newUser.password);

      const token = jwt.sign({ id: newUser._id }, SECRET, {
        expiresIn: 86400, // 24 hours
      });
      res.send({ token });
    });
  } catch (error) {
    next({ message: error?.message, status: 404 });
  } finally {
    session.endSession();
  }
};

module.exports = finalUserCreate;
