const techUserModifier = async (req, res, next) => {
  const { id } = req.params;
  try {
    res.send("Soy modify User Tech");
  } catch (err) {
    next(err);
  }
};

module.exports = { techUserModifier };
