const UserF = require("../../models/FinalUser");
const finalUsersDetails = async (req, res, next) => {
  const { id } = req.params;
  try {
    const gettechUserDetail = await UserF.findById(id).populate({
      path: "user",
    });
    res.status(200).send(gettechUserDetail);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  finalUsersDetails,
};
