const finalUsersDetails = async (req, res, next) => {
  const { id } = req.params;
  try {
    res.send("Soy el finalUserDetails");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  finalUsersDetails,
};
