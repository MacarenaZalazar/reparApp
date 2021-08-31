const { Router } = require('express');
const e = require('express');
const {filteredTechByZoneAndJobType} = require('../controllers/TechUsers/filteredTechByZone&JobType')
const router = Router()

router.get('/', filteredTechByZoneAndJobType)

module.exports = router