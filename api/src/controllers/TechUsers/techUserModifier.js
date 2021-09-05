const UsersT = require("../../models/TechUser");
const User = require("../../models/User");

const techUserModifier = async (req, res, next) => {
  const { id } = req.params;
  const {
    workZones,
    jobTypes,
    qualification,
    name,
    lastName,
    image,
    phone,
    mail,
  } = req.body;
  const session = await User.startSession();
  try {
    session.startTransaction();
    const userTechUpdate = await UsersT.findByIdAndUpdate(id, {
      workZones,
      jobTypes,
      qualification
    }, {new:true, session});

    await User.findByIdAndUpdate(userTechUpdate.user, {
      name,
      lastName,
      image,
      phone,
      mail
    }, {session});
    res.send(userTechUpdate)
    await session.commitTransaction();
  } catch (error) {
    await session.abortTransaction();
    next({message: error.message, status: 404});
  } finally {
    session.endSession();
  }


  // try {
  //   const IDUSER = await UsersT.findById(id);
  //   await UsersT.findByIdAndUpdate(id, {
  //     workZones,
  //     jobTypes,
  //     qualification,
  //   });
  //   await User.findByIdAndUpdate(IDUSER.user, {
  //     name,
  //     lastName,
  //     image,
  //     phone,
  //     mail,
  //   });
  //   res.sendStatus(200);
  // } catch (err) {
  //   next(err);
  // }
};

module.exports = techUserModifier;
