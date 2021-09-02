const { Router } = require("express");
const {
  filteredTechByZoneAndJobType,
  techUsersDetails,
  techUserModifier,
  techUserCreate,
} = require("../controllers/TechUsers");
const router = Router();

router.get("/", filteredTechByZoneAndJobType);
router.get("/:id", techUsersDetails);
router.put("/:id", techUserModifier);
router.post("/", techUserCreate);

module.exports = router;
