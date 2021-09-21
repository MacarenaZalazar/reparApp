const TechUser = require("../../models/TechUser");
const UserController = require("../Users");
const { SECRET } = process.env;
const jwt = require("jsonwebtoken");
const Role = require("../../models/roles");
const nodemailer = require("nodemailer");

const techUserCreate = async (req, res, next) => {
  const TechUserSession = await TechUser.startSession();
  const { workZones, jobTypes, qualification, price } = req.body;
  try {
    await TechUserSession.withTransaction(async () => {
      const idRole = await Role.find({ name: { $in: "userTech" } });
      const newUser = await UserController.createNewUser(req.body, idRole);
      await TechUser.create({
        user: newUser._id,
        workZones,
        jobTypes,
        qualification,
        price,
      });
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
        to: `${req.body.mail}`,
        subject: "Bienvenido a ReparApp",
        text: "Le damos la bienvenida a la ReparApp",
        html: `<h2>ReparApp</h2>
        <h3>${req.body.name} te damos la bienvenida a ReparApp</h3>
        <h3>Ya podes ofrecer tus servicios para dale la mejor solución a los clientes</h3>`,
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
    TechUserSession.endSession();
  }
};

module.exports = techUserCreate;
