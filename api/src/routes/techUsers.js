const { Router } = require("express");
const e = require("express");
const {
  filteredTechByZoneAndJobType,
} = require("../controllers/TechUsers/filteredTechByZone&JobType");
const { techUsersDetails } = require("../controllers/TechUsers/techUserDetail");
const {
  techUserModifier,
} = require("../controllers/TechUsers/techUserModifier");
const router = Router();

router.get("/", filteredTechByZoneAndJobType);
router.get("/:id", techUsersDetails);
router.put("/:id", techUserModifier);

module.exports = router;
