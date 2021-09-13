const User = require("../../models/User");
const UserF = require("../../models/FinalUser");
const UserT = require("../../models/TechUser");

const createNewUser = async (user, idRole) => {
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
    throw error;
  }
};

const getByUserName = async (req, res, next) => {
  const { userName } = req.body;
  try {
    let UserbyUserName = await User.find({ userName }).populate({
      path: "roles",
    });
    let finalside;
    if (UserbyUserName && UserbyUserName[0].roles[0].name === "userFinal") {
      let user = UserbyUserName[0]._id;

      finalside = await UserF.find({ user });
    } else if (
      UserbyUserName &&
      UserbyUserName[0].roles[0].name === "userTech"
    ) {
      let user = UserbyUserName[0]._id;

      finalside = await UserT.find({ user });
    }

    let result = await UserbyUserName.concat(finalside);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createNewUser,
  getByUserName,
};
