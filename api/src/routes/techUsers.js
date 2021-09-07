const { Router } = require("express");

//requerimos los controller

const {
  filteredTechByZoneAndJobType,
  techUsersDetails,
  techUserModifier,
  techUserCreate,
  techUserAll,
  deleteUserT,
} = require("../controllers/TechUsers");
const router = Router();

// requerimos los middlewares
const {
  isuserTech,
  verifyToken,
  checkDuplicateUsernameOrEmail,
} = require("../middlewares");

//creamos las rutas
router.get("/filter", filteredTechByZoneAndJobType);
router.get("/", techUserAll);
router.get("/:id", techUsersDetails);
router.put("/:id", [verifyToken, isuserTech], techUserModifier);
router.post("/", checkDuplicateUsernameOrEmail, techUserCreate);
router.delete("/:id", [verifyToken, isuserTech], deleteUserT);

module.exports = router;
