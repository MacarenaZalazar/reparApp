const { Router } = require("express");
const router = Router();
const contact = require("../controllers/Contact");

router.post("/", contact);

module.exports = router;