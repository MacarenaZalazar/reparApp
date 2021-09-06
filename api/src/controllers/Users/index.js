const User = require("../../models/User");

const createNewUser = async (user) => {
  try {
    const newUser = await User.create({
      name: user.name,
      lastName: user.lastName,
      mail: user.mail,
      userName: user.userName,
      password: user.password,
      image: user.image,
    });
    return newUser;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createNewUser,
};
