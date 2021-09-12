const TechUser = require("../../models/TechUser");
const UserController = require("../Users");
const { SECRET } = process.env;
const jwt = require("jsonwebtoken");
const Role = require("../../models/roles");

const techUserCreate = async (req, res, next) => {
  const TechUserSession = await TechUser.startSession();
  const { workZones, jobTypes, qualification } = req.body;
  try {
    await TechUserSession.withTransaction(async () => {
      const idRole = await Role.find({ name: { $in: "userTech" } });
      const newUser = await UserController.createNewUser(req.body, idRole);
      await TechUser.create({
        user: newUser._id,
        workZones,
        jobTypes,
        qualification,
      });
      const token = jwt.sign({ id: newUser._id }, SECRET, {
        expiresIn: 86400, // 24 hours
      });
      res.send({ token });
    });
  } catch (error) {
    next({ message: error?.message, status: 404 });
  } finally {
    TechUserSession.endSession();
  }
};

module.exports = techUserCreate;
