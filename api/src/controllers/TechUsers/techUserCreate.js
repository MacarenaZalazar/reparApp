const TechUser = require("../../models/TechUser");
const UserController = require("../Users");

const techUserCreate = async (req, res, next) => {
  const TechUserSession = await TechUser.startSession();
  const {workZones, jobTypes, qualification} = req.body;
  try {
    await TechUserSession.withTransaction(async () => {
      const newUser = await UserController.createNewUser(req.body);
       await TechUser.create({
        user: newUser._id,
        workZones,
        jobTypes,
        qualification
      });
    });
    TechUserSession.endSession();
    res.send({message: "Se creo correctamente el usuario final"});
  } catch (error) {
    TechUserSession.endSession();
    next({ message: error?.message, status: 404 });
  }
};

module.exports = techUserCreate;
