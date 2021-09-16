const workOrders = require("../../models/workOrders");
const UserF = require("../../models/FinalUser");

const postNewRequest = async (req, res, next) => {
  const workOrdersSession = await workOrders.startSession();
  const { userFinal } = req.query;

  const { title, description, workImage, workType, state, zone } = req.body;
  try {
    await workOrdersSession.withTransaction(async () => {
      await workOrders.create({
        title,
        description,
        userFinal,
        workImage,
        workType,
        state,
        zone,
      });
    });
    workOrdersSession.endSession();
    res.send("Se creo correctamente la orden");
  } catch (error) {
    workOrdersSession.endSession();
    next({ message: error?.message, status: 404 });
  }
};

const requestModifier = async (req, res, next) => {
  const workOrdersSession = await workOrders.startSession();
  const { id } = req.params;
  const { title, description, workImage, workType, state, zone } = req.body;
  try {
    await workOrdersSession.withTransaction(async () => {
      await workOrders.findByIdAndUpdate(id, {
        title,
        description,
        workImage,
        workType,
        state,
        zone,
      });
    });
    workOrdersSession.endSession();
    res.send("Orden actualizada correctamente");
  } catch (error) {
    workOrdersSession.endSession();
    next({ message: error?.message, status: 404 });
  }
};

const deleteRequest = async (req, res, next) => {
  const workOrdersSession = await workOrders.startSession();
  const { id } = req.params;
  try {
    await workOrdersSession.withTransaction(async () => {
      await workOrders.findByIdAndDelete(id);
    });
    workOrdersSession.endSession();
    res.send("Orden eliminada correctamente");
  } catch (error) {
    workOrdersSession.endSession();
    next({ message: error?.message, status: 404 });
  }
};

const getDetailsRequest = async (req, res, next) => {
  const workOrdersSession = await workOrders.startSession();
  const { id } = req.params;
  try {
    let workOrder;
    await workOrdersSession.withTransaction(async () => {
      workOrder = await workOrders.findById(id);
    });
    workOrdersSession.endSession();
    res.send(workOrder);
  } catch (error) {
    workOrdersSession.endSession();
    next({ message: error?.message, status: 404 });
  }
};

const getRequest = async (req, res, next) => {
  try {
    const getAll = await workOrders.find({}).populate({ path: "userFinal" });
    res.status(200).send(getAll);
  } catch (error) {
    next(error);
  }
};

const getRequestFiltered = async (req, res, next) => {
  let { workType, state, workZones } = req.query;

  let workZoneSplit = workZones.split(",");

  if (!workType || workType === "null") {
    workType = null;
  }

  if (!state || state === "null") {
    state = null;
    workZones = null;
  }

  if (!workZones || workZones === "null") {
    workZones = null;
  }

  if (workType && state && workZones) {
    try {
      let filtered = await workOrders.find({
        workType,
        state,
        zone: workZoneSplit,
      });

      res.status(200).json(filtered);
    } catch (error) {
      next(error);
    }
  } else if (workType && !state) {
    try {
      let filtered = await workOrders.find({ workType });

      res.status(200).json(filtered);
    } catch (error) {
      next(error);
    }
  } else if (workType && state && !workZones) {
    try {
      let filtered = await workOrders.find({ workType, state });

      res.status(200).json(filtered);
    } catch (error) {
      next(error);
    }
  } else if (!workType && state && !workZones) {
    try {
      let filtered = await workOrders.find({ state });

      res.status(200).json(filtered);
    } catch (error) {
      next(error);
    }
  } else if (!workType && state && workZones) {
    try {
      let filtered = await workOrders.find({ state, zone: workZoneSplit });

      res.status(200).json(filtered);
    } catch (error) {
      next(error);
    }
  } else res.sendStatus(400);
};

const getRequestsByID = async (req, res, next) => {
  const { id } = req.params;
  let userFinal = id;
  try {
    const getAll = await workOrders.find({ userFinal });
    // const getIdUser = await UserF.find({ _id: userFinal });

    res.status(200).json(getAll);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postNewRequest,
  requestModifier,
  deleteRequest,
  getRequest,
  getRequestFiltered,
  getRequestsByID,
  getDetailsRequest,
};
