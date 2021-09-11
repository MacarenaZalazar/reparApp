const UserT = require("../../models/TechUser");

const filteredTechByZoneAndJobType = async (req, res, next) => {
  let { jobTypes, state, workZones } = req.query;

  if (jobTypes === "null") {
    jobTypes = null;
  }

  if (state === "null") {
    state = null;
    workZones = null;
  }

  if (workZones === "null") {
    workZones = null;
  }

  if (jobTypes && state && workZones) {
    try {
      let filtered = await UserT.find({ jobTypes, workZones }).populate({
        path: "user",
      });

      let filteredState = filtered.filter((e) => e.user.state === state);

      res.status(200).json(filteredState);
    } catch (error) {
      next(error);
    }
  } else if (jobTypes && !state) {
    try {
      let filtered = await UserT.find({ jobTypes }).populate({
        path: "user",
      });
      res.status(200).json(filtered);
    } catch (error) {
      next(error);
    }
  } else if (jobTypes && state) {
    try {
      let filtered = await UserT.find({ jobTypes, state }).populate({
        path: "user",
      });

      let filteredState = filtered.filter((e) => e.user.state === state);

      res.status(200).json(filteredState);
    } catch (error) {
      next(error);
    }
  } else if (!jobTypes && state) {
    try {
      let filtered = await UserT.find({}).populate({
        path: "user",
      });

      let filteredState = filtered.filter((e) => e.user.state === state);

      res.status(200).json(filteredState);
    } catch (error) {
      next(error);
    }
  } else res.sendStatus(400);
};

module.exports = filteredTechByZoneAndJobType;
