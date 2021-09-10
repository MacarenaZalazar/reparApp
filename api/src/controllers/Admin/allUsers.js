const userF = require("../../models/FinalUser");
const userT = require("../../models/TechUser");
const workOrder = require("../../models/workOrders");

const allUsers = async (req, res, next) => {
  try {
    let allF = await userF.find({}).populate({ path: "user" });
    let allT = await userT.find({}).populate({ path: "user" });
    let work = await workOrder.find({});

    res.status(200).json({ allF, allT, work });
  } catch (error) {
    next(error);
  }
};

module.exports = allUsers;
