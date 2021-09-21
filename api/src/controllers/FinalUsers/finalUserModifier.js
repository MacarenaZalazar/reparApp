const User = require("../../models/User");
const UserF = require("../../models/FinalUser");

const finalUserModifier = async (req, res, next) => {
  const session = await UserF.startSession();
  const { id } = req.params;
  const { name, lastName, image, phone, state, zone, password } = req.body;
  
  try {
    await session.withTransaction(async () => {

      const {user} = await UserF.findByIdAndUpdate(id, { zone });
      await User.findByIdAndUpdate(user, {
        name,
        lastName,
        image,
        phone,
        state
      });
      if(password){
        const pass = await User.encryptPassword(password);
        await User.findByIdAndUpdate(user, {password: pass});
      }
    });
    session.endSession();
    res.send("Usuario modificado correctamente");
  } catch (err) {
    session.endSession();
    next({ message: err?.message, status: 404 });
  }
};

module.exports = finalUserModifier;
