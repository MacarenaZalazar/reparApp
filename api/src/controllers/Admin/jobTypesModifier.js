const JobTypes = require("../../models/JobTypes");

const jobTypeModifier = async (req, res, next) => {
  const { newJob } = req.body;

  try {
    JobTypes.find({})
      .then((doc) => {
        doc[0].name.push(newJob);
        return doc;
      })
      .then((doc) => {
        doc[0].save();
      });

    res.status(200).json("uploaded");
  } catch (error) {
    next(error);
  }
};

module.exports = jobTypeModifier;
