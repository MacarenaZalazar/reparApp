const Userst = require("../../models/TechUser");
const User = require("../../models/User");

const techUserCreate = (req, res, next) => {
  const {
    name,
    lastName,
    mail,
    userName,
    password,
    workZones,
    jobTypes,
    qualification,
    phone,
  } = req.body;
  if (
    !workZones &&
    !jobTypes &&
    !name &&
    !lastName &&
    !mail &&
    !userName &&
    !password
  ) {
    res.sendStatus(400);
  } else {
    try {
      const newUser = new User({
        name,
        lastName,
        mail,
        userName,
        password,
        phone,
      });
      newUser.save((err) => {
        if (err) throw err;
        const userTech = new Userst({
          user: newUser._id,
          workZones,
          jobTypes,
          qualification,
        });
        userTech.save((err) => {
          if (err) throw err;
          res.status(200).send("usuario tech creado!");
        });
      });
    } catch (error) {
      next({ message: error?.message, status: 404 });
    }
  }
};

module.exports = techUserCreate;
