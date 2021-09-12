const user = require("../../models/User");

const banUser = async (req, res, next) => {
  const { ban, id } = req.body;

  try {
    await user.findByIdAndUpdate(id, { ban });
    res.status(200).json("Cambio ban Ok");
  } catch (error) {
    next(error);
  }
};

module.exports = banUser;
