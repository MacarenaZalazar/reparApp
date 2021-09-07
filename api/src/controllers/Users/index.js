const User = require("../../models/User");

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
    });

    return newUser;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createNewUser,
};
