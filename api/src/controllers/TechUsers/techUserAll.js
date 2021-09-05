const UsersT = require("../../models/TechUser");

const techUserAll = async (req, res, next) => {
  try {
    const getAll = await UsersT.find({}).populate({ path: "user" });
    res.status(200).send(getAll);
  } catch (error) {
    next(error);
  }
};

module.exports = techUserAll;
