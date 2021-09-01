const { Router } = require('express');
const e = require('express');
const {filteredTechByZoneAndJobType, newTechUser, getAllTechUser} = require('../controllers/TechUsers')
const router = Router()

router.get('/', filteredTechByZoneAndJobType)
router.post('/create', newTechUser);
router.get('/all', getAllTechUser);

module.exports = router