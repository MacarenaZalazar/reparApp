const FinalUser = require('../../models/FinalUser')

const finalUserModifier = async (req, res, next) => {
  const { id } = req.params;
  try {
    
  } catch (err) {
    next(err);
  }
};

module.exports = { finalUserModifier };
