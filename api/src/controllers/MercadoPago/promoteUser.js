const user = require("../../models/User");

const promoteUser = async (id, promoted) => {
    console.log(id)
    console.log(promoted)
  try {
    await user.findByIdAndUpdate(id,{promoted} );
    console.log("Cambio promoted Ok");
  } catch (error) {
    console.log(error);
  }
};

module.exports = promoteUser;