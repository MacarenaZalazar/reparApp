const { Router } = require("express");
const router = Router();

// requerimos los controller

const { finalUserCreate } = require("../controllers/FinalUsers");

const {
  finalUserModifier,
} = require("../controllers/FinalUsers/finalUserModifier");

const {
  finalUsersDetails,
} = require("../controllers/FinalUsers/finalUserDetail");

const { finalUserAll } = require("../controllers/FinalUsers/finalUsersAll");

//creamos las rutas

router.post("/create", finalUserCreate);

router.put("/:id", finalUserModifier);

router.get("/:id", finalUsersDetails);

router.get("/", finalUserAll);

module.exports = router;
