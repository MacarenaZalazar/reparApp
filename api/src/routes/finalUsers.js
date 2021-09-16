const { Router } = require("express");
const router = Router();

// requerimos los controller

const {
  finalUserCreate,
  finalUserModifier,
  finalUsersDetail,
  finalUserAll,
} = require("../controllers/FinalUsers");

const { deleteUserF } = require("../controllers/FinalUsers/finalUserDelete");

// requerimos los middlewares

const {
  isuserFinal,
  verifyToken,
  checkDuplicateUsernameOrEmail,
} = require("../middlewares");

//creamos las rutas

router.post("/", checkDuplicateUsernameOrEmail, finalUserCreate);
router.put("/:id", [verifyToken, isuserFinal], finalUserModifier);
router.delete("/:id", [verifyToken, isuserFinal], deleteUserF);
router.get("/:id", finalUsersDetail);
router.get("/", finalUserAll);

module.exports = router;
