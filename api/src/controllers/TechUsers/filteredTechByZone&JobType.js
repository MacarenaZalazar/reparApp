const UserT = require("../../models/TechUser");

const filteredTechByZoneAndJobType = async (req, res, next) => {
  const { jobTypes, workZones } = req.query;

  if (jobTypes && workZones) {
    try {
      let filtered = await UserT.find({ jobTypes, workZones }).populate({
        path: "user",
      });
      res.status(200).json(filtered);
    } catch (error) {
      next(error);
    }
  } else res.sendStatus(400);
};

module.exports = filteredTechByZoneAndJobType;
