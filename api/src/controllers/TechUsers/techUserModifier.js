const UsersT = require("../../models/TechUser");
const User = require("../../models/User");

const techUserModifier = async (req, res, next) => {
  const session = await UsersT.startSession();
  const { id } = req.params;
  const { name, lastName, image, phone, state, password, workZones, jobTypes, price} = req.body;
  
  try {
    await session.withTransaction(async () => {

      const {user} = await UsersT.findByIdAndUpdate(id, { workZones, jobTypes, price});
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

module.exports = techUserModifier;
