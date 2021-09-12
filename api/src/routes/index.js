const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const techUsers = require("./techUsers");
const finalUsers = require("./finalUsers");
const request = require("./workOrders");
const login = require("./login");
const admin = require("./admin");
const jobType = require("./jobtypes");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/techUsers", techUsers);
router.use("/finalUsers", finalUsers);
router.use("/request", request);
router.use("/login", login);
router.use("/admin", admin);
router.use("/jobTypes", jobType);

module.exports = router;
