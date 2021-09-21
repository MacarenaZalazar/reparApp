const nodemailer = require("nodemailer");

const contact = async (req, res, next) => {
    try {
        const {mail, user, description} = req.body;
        
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
            from: `${mail}`,
            to: "reparapp.proyecto.final@gmail.com",
            subject: `Mensaje de ${user}`,
            html: `<h2>ReparApp</h2>
            <h3>Mail de consulta: ${mail} Nombre: ${user}</h3>
            <h3>${description}</h3>`,
          };
    
          transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
              return res.status(500).send(err.message);
            }
          });

          res.send("Correo enviado exitosamente");

    } catch (error) {
        next(error);
    }
};

module.exports = contact;