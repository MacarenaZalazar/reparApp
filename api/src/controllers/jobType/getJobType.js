const jobType = require("../../models/JobTypes");

const getJobType = async (req, res, next) => {
  try {
    const jobs = await jobType.find({});
    res.status(200).send(jobs[0].name);
  } catch (error) {
    next(error);
  }
};

module.exports = getJobType;
