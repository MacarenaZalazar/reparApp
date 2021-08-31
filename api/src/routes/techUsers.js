const { Router } = require('express');
const e = require('express');
const {filteredTechByZoneAndJobType, updateTechUser} = require('../controllers/TechUsers')
const router = Router()

router.get('/', filteredTechByZoneAndJobType)
router.put('/update', updateTechUser);

module.exports = router