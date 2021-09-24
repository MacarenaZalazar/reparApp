const user = require("../../models/User");

const promoteUser = async (id, promoted) => {
  try {
    await user.findByIdAndUpdate(id,{promoted} );
  } catch (error) {
    console.log(error);
  }
};

module.exports = promoteUser;