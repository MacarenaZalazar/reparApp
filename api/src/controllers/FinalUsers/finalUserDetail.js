const UserF = require("../../models/FinalUser");
const finalUsersDetails = async (req, res, next) => {
  const { id } = req.params;
  if (id) {
    try {
      const gettechUserDetail = await UserF.findById(id).populate({
        path: "user",
      });
      res.status(200).send(gettechUserDetail);
    } catch (error) {
      next(error);
    }
  }else{
    res.status(400).send("Id Undefine");
  }
};

module.exports = finalUsersDetails;
