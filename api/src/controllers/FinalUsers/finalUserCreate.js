const FinalUser = require("../../models/FinalUser");
const UserController = require("../Users");
const { SECRET } = process.env;
const jwt = require("jsonwebtoken");
const Role = require("../../models/roles");
const User = require("../../models/User");
const nodemailer = require("nodemailer");

const finalUserCreate = async (req, res, next) => {
  const session = await FinalUser.startSession();
  // UserSession.startTransaction();
  try {
    await session.withTransaction(async () => {
      const user = req.body;
      const idRole = await Role.find({ name: { $in: "userFinal" } });

      const newUser = await UserController.createNewUser(user, idRole);
      await FinalUser.create({
        user: newUser._id,
        zone: user.zone,
        score: user.score,
      });
      newUser.password = await User.encryptPassword(newUser.password);

      const token = jwt.sign({ id: newUser._id }, SECRET, {
        expiresIn: 86400, // 24 hours
      });
      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.email",
        port: 587,
        secure: false,
        auth: {
          user: "reparapp.proyecto.final@gmail.com",
          pass: "Henry12345",
        },
      });
      var mailOptions = {
        from: "reparapp.proyecto.final@gmail.com",
        to: `${user.mail}`,
        subject: "Bienvenido a ReparApp",
        text: "Le damos la bienvenida a la ReparApp",
        html: `<h2>ReparApp</h2>
        <h3>${user.name} te damos la bienvenida a ReparApp</h3>
        <h3>Ya podes crear pedidos de trabajo y contactarte con los mejores profesionales</h3>`,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          return res.status(500).send(err.message);
        }
      });
      res.send({ token });
    });
  } catch (error) {
    next({ message: error?.message, status: 404 });
  } finally {
    session.endSession();
  }
};

module.exports = finalUserCreate;
