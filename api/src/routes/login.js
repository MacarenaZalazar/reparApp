const { Router } = require("express");
const router = Router();

const login = require("../controllers/Login");

const { isuserFinal, isuserTech } = require("../middlewares");
const { verifyEmail } = require("../controllers/Users/index");

router.post("/", login);

router.get("/", verifyEmail);

module.exports = router;
