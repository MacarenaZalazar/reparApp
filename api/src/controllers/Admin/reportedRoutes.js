const User = require("../../models/User");
const WorkOrder = require("../../models/workOrders");

const getReportedUsers = async (req, res, next) => {
  let reported = true;
  try {
    let usersReported = await User.find({ reported });
    res.status(200).json(usersReported);
  } catch (error) {
    next(error);
  }
};

const getReportedWorkOrders = async (req, res, next) => {
  let reported = true;
  try {
    let workOrdersReported = await WorkOrder.find({ reported });
    res.status(200).json(workOrdersReported);
  } catch (error) {
    next(error);
  }
};

const changeReportedUser = async (req, res, next) => {
  let { id } = req.params;
  let reported = false;
  try {
    await User.findByIdAndUpdate(id, { reported });
    res.status(200).send("User not reported anymore");
  } catch (error) {
    next(error);
  }
};
const changeReportedWorkOrder = async (req, res, next) => {
  let { id } = req.params;
  let reported = false;
  try {
    await WorkOrder.findByIdAndUpdate(id, { reported });
    res.status(200).send("Work Order not reported anymore");
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getReportedUsers,
  getReportedWorkOrders,
  changeReportedUser,
  changeReportedWorkOrder,
};
