const JobTypes = require("../../models/JobTypes");

const jobTypeDelete = async (req, res, next) => {
  const { newJob } = req.body;
  
  try {
    JobTypes.find({})
      .then((doc) => {
        let filtered = doc[0].name.filter((e) => {
          if (e !== newJob) return e;
        });
        doc[0].name = filtered;
        return doc;
      })
      .then((doc) => {
        doc[0].save();
      });

    res.status(200).json("DELETED");
  } catch (error) {
    next(error);
  }
};

module.exports = jobTypeDelete;
