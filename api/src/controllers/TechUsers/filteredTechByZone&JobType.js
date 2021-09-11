const UserT = require("../../models/TechUser");
const User = require("../../models/User");

const filteredTechByZoneAndJobType = async (req, res, next) => {
  let { jobTypes, state, workZones } = req.query;
  console.log(state);
  console.log(workZones);

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

      let filteredState = await filtered.filter((e) => e.user.state === state);

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

      let filteredState = await filtered.filter((e) => e.user.state === state);

      res.status(200).json(filteredState);
    } catch (error) {
      next(error);
    }
  } else if (!jobTypes && state) {
    console.log("-----------------");
    console.log("entre aca");
    console.log("-----------------");
    try {
      let filtered = await UserT.find({}).populate({
        path: "user",
      });

      console.log("filtered:", filtered);

      let filteredState = await filtered.filter((e) => e.user.state === state);

      console.log(filteredState);
      res.status(200).json(filteredState);
    } catch (error) {
      next(error);
    }
  } else res.sendStatus(400);
};

module.exports = filteredTechByZoneAndJobType;
