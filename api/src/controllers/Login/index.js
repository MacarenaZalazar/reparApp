const User = require("../../models/User");
const UserF = require("../../models/FinalUser");
const UserT = require("../../models/TechUser");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { use } = require("../../routes/login");

const { SECRET } = process.env;

const logIn = async (req, res) => {
  try {
    // Request body email can be an email or username

    // const typeUser = await User.findOne({ mail: req.body.mail }).populate(
    //   "roles"
    // );
    let userFound = await User.findOne({ mail: req.body.mail }).populate(
      "roles"
    );

    if (req.body.password === "forgot your password") {
      let code = (Math.floor(Math.random() * 90000) + 10000).toString();
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
        subject: "Restablecimiento de contraseña",
        text: "Este codigo es para restablecer tu contraseña",
        html: `<h2>ReparApp</h2>
        <h3>Codigo de recuperacion: ${code}</h3>`,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          return res.status(500).send(err.message);
        }
      });
      passwordChanged = await User.encryptPassword(code);

      await User.findByIdAndUpdate(userFound._id, {
        password: passwordChanged,
      });
      return res.send({ message: "reset pass", code: code });
    }

    if (userFound.roles[0].name === "userFinal") {
      const userFinal = await UserF.find({ user: { $eq: userFound._id } });

      console.log(userFinal);

      userFound.zone = userFinal[0].zone;
      userFound.idFinal = userFinal[0]._id;
    }
    if (userFound.roles[0].name === "userTech") {
      const userTech = await UserT.find({ user: { $eq: userFound._id } });

      userFound.workZones = userTech[0].workZones;
      userFound.idTech = userTech[0]._id;
    }

    if (!userFound) return res.status(400).json({ message: "User Not Found" });

    const matchPassword = await User.comparePassword(
      req.body.password,
      userFound.password
    );

    if (!matchPassword)
      return res.status(401).json({
        token: null,
        message: "Invalid Password",
      });

    const token = jwt.sign({ id: userFound._id }, SECRET, {
      expiresIn: 86400, // 24 hours
    });

    if (userFound.roles[0].name === "userFinal") {
      res.json({
        token,
        id: userFound._id,
        idUserFinal: userFound.idFinal,
        roles: userFound.roles,
        zone: userFound.zone,
        userName: userFound.userName,
        state: userFound.state,
      });
    }
    if (userFound.roles[0].name === "userTech") {
      res.json({
        token,
        id: userFound._id,
        idTech: userFound.idTech,
        roles: userFound.roles,
        workZones: userFound.workZones,
        userName: userFound.userName,
        state: userFound.state,
      });
    }
    if (userFound.roles[0].name === "admin") {
      res.json({
        token,
        id: userFound._id,
        roles: userFound.roles,
        userName: userFound.userName,
      });
    }
    // res.json({ token, userFound });
  } catch (error) {
    console.log(error);
  }
};
module.exports = logIn;
