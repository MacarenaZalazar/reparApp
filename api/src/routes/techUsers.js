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

//creamos las rutas
router.get("/filter", filteredTechByZoneAndJobType);
router.get("/", techUserAll);
router.get("/:id", techUsersDetails);
router.put("/:id", techUserModifier);
router.post("/", techUserCreate);
router.delete("/:id", deleteUserT);

module.exports = router;
