const workOrder = require("../../models/workOrders");

const banUserorWorkOrder = async (req, res, next) => {
  const { ban, id } = req.body;

  try {
    await workOrder
      .findByIdAndUpdate(id, { ban })
      .populate({ path: "userFinal" });

    res.status(200).json("Cambio ban Ok");
  } catch (error) {
    next(error);
  }
};

module.exports = banUserorWorkOrder;
