const FinalUser = require("../../models/FinalUser");
const User = require("../../models/User");

const finalUserCreate = async (req, res, next) => {
  const UserSession = await User.startSession();
  UserSession.startTransaction();
  const user = req.body;
  try {
    // await UserSession.withTransaction(async () => {
    //   //Crea el usuario base y es asignado a una variable para obtener el ID

    // });
    const newUser = await User.create(
      [
        {
          name: user.name,
          lastName: user.lastName,
          mail: user.mail,
          userName: user.userName,
          password: user.password,
        },
      ],
      { session: UserSession }
    );

    await FinalUser.create(
      [{ user: newUser._id, zone: user.zone, score: user.score }],
      { session: UserSession }
    );
    await UserSession.commitTransaction();
    UserSession.endSession();

    res.send("Se creo correctamente el usuario final");
  } catch (error) {
    console.log(error);
    await UserSession.abortTransaction();
    UserSession.endSession();
    next(error);
  }
};

module.exports = finalUserCreate;
