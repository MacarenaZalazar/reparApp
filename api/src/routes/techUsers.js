const { Router } = require("express");

//requerimos los controller

const {
  filteredTechByZoneAndJobType,
  techUsersDetails,
  techUserModifier,
  techUserCreate,
} = require("../controllers/TechUsers");
const router = Router();


//creamos las rutas
router.get("/", filteredTechByZoneAndJobType);
router.get("/:id", techUsersDetails);
router.put("/:id", techUserModifier);
router.post("/", techUserCreate);

module.exports = router;
