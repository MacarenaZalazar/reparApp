const finalUserModifier = async (req, res, next) => {
  const { id } = req.params;
  try {
    res.send("Soy modify User Final");
  } catch (err) {
    next(err);
  }
};

module.exports = { finalUserModifier };
