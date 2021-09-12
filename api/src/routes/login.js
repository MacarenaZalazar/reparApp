const { Router } = require("express");
const router = Router();

const login = require("../controllers/Login");

const { isuserFinal, isuserTech } = require("../middlewares");

router.post("/", login);

module.exports = router;
