const User = require("../../models/User");
const UserF = require("../../models/FinalUser");
const UserT = require("../../models/TechUser");
const workOrders = require("../../models/workOrders");
const roles = require("../../models/roles");

const createNewUser = async (user, idRole, next) => {
  try {
    const Password = await User.encryptPassword(user.password);
    const newUser = await User.create({
      name: user.name,
      lastName: user.lastName,
      mail: user.mail,
      userName: user.userName,
      password: Password,
      image: user.image,
      roles: idRole,
      state: user.state,
    });

    return newUser;
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getByUserName = async (req, res, next) => {
  const { userName } = req.query;
  try {
    let UserR = await User.find({
      userName: { $regex: userName, $options: "i" },
    });

    let obj = [];

    for (let i = 0; i < UserR.length; i++) {
      let _id = UserR[i].roles[0];
      let rolUserName = await roles.findOne({ _id });

      if (rolUserName.name === "userFinal") {
        let user = UserR[i]._id;
        let auxF = await UserF.findOne({ user });
        console.log(auxF._id);
        obj = [...obj, { ...UserR[i]._doc, finalUserId: auxF._id }];
      }
      if (rolUserName.name === "userTech") {
        let user = UserR[i]._id;
        let auxT = await UserT.findOne({ user });
        console.log(auxT);
        obj = [...obj, { ...UserR[i]._doc, techUserId: auxT._id }];
      }
    }
    res.status(200).json(obj);
  } catch (error) {
    next(error);
  }
};
const verifyEmail = async (req, res, next) => {
  const { mail } = req.query;
  try {
    let existe = await User.findOne({ mail: mail });

    res.status(200).json(existe);
  } catch (error) {
    next(error);
  }
};

const reportUser = async (req, res, next) => {
  const { _id } = req.query;
  console.log('id', _id)
  try {
    await User.findByIdAndUpdate(_id, { reported: true });
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

const reportWork = async (req, res, next) => {
  const { _id } = req.query;
  try {
    await workOrders.findByIdAndUpdate(_id, { reported: true });
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createNewUser,
  getByUserName,
  verifyEmail,
  reportUser,
  reportWork,
};
