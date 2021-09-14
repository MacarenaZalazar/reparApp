const User = require("../../models/User");

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
    res.status(200).json(UserR);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createNewUser,
  getByUserName,
};
