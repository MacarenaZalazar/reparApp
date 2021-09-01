const { Router } = require('express');
const e = require('express');
const {filteredTechByZoneAndJobType, newTechUser} = require('../controllers/TechUsers')
const router = Router()

router.get('/', filteredTechByZoneAndJobType)
router.post('/create', newTechUser);

module.exports = router