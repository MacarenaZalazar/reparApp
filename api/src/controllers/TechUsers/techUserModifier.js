const UsersT = require('../../models/TechUser');

const techUserModifier = async (req, res, res) => {
  const { id } = req.params;
  try {
    res.send("Soy modify User Tech");
  } catch (err) {
    next(err);
  }
};

module.exports = techUserModifier;
