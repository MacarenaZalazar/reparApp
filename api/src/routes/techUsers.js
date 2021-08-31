const { Router } = require('express');
const e = require('express');
const {filteredTechByZoneAndJobType} = require('../controllers/TechUsers/filteredTechByZone&JobType');
const {techUsersDetails} = require('../controllers/TechUsers/techUserDetail');
const router = Router()

router.get('/', filteredTechByZoneAndJobType)
router.get('/:id', techUsersDetails)

module.exports = router