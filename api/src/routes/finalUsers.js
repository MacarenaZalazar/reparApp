const { Router } = require("express");
const router = Router();

// requerimos los controller

const {
  finalUserCreate,
  finalUserModifier,
  finalUserModifier,
  finalUserAll,
} = require("../controllers/FinalUsers");

//creamos las rutas

router.post("/create", finalUserCreate);

router.put("/:id", finalUserModifier);

router.get("/:id", finalUsersDetail);

router.get("/", finalUserAll);

module.exports = router;
