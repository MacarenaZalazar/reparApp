const { Router } = require("express");
const {filteredTechByZoneAndJobType, techUsersDetails, techUserModifier} = require('../controllers/TechUsers')
const router = Router();

router.get("/", filteredTechByZoneAndJobType);
router.get("/:id", techUsersDetails);
router.put("/:id", techUserModifier);

module.exports = router;
