const UserT = require("../../models/TechUser");

const filteredTechByZoneAndJobType = async (req, res, next) => {
  let { jobTypes, workZones } = req.query;

  if (jobTypes === "null") {
    jobTypes = null;
  }
  if (workZones === "null") {
    workZones = null;
  }

  if (jobTypes && workZones) {
    try {
      let filtered = await UserT.find({ jobTypes, workZones }).populate({
        path: "user",
      });
      res.status(200).json(filtered);
    } catch (error) {
      next(error);
    }
  } else if (jobTypes && !workZones) {
    try {
      let filtered = await UserT.find({ jobTypes }).populate({
        path: "user",
      });
      res.status(200).json(filtered);
    } catch (error) {
      next(error);
    }
  } else if (!jobTypes && workZones) {
    try {
      let filtered = await UserT.find({ workZones }).populate({
        path: "user",
      });
      res.status(200).json(filtered);
    } catch (error) {
      next(error);
    }
  } else res.sendStatus(400);
};

module.exports = filteredTechByZoneAndJobType;
