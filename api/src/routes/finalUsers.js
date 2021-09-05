const { Router } = require("express");
const router = Router();

// requerimos los controller

const {
  finalUserCreate,
  finalUserModifier,
  finalUserModifier,
  finalUserAll,
} = require("../controllers/FinalUsers");

const { deleteUserF } = require("../controllers/FinalUsers/finalUserDelete");

//creamos las rutas

router.post("/", finalUserCreate);
router.put("/:id", finalUserModifier);
router.delete("/id", deleteUserF);
router.get("/:id", finalUsersDetails);
router.get("/", finalUserAll);

module.exports = router;
