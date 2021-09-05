const UsersF = require("../../models/FinalUser");

const finalUserAll = async (req, res, next) => {
  try {
    const getAll = await UsersF.find({}).populate({ path: "user" });
    res.status(200).send(getAll);
  } catch (error) {
    next(error);
  }
};

module.exports = finalUserAll;
