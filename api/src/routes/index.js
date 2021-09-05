const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const techUsers = require("./techUsers");
const finalUsers = require("./finalUsers");
const request = require("./workOrders");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/techUsers", techUsers);
router.use("/finalUsers", finalUsers);
router.use("/request", request);

module.exports = router;
