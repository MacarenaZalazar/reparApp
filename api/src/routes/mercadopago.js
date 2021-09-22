const { Router } = require("express");
const router = Router();
const {pagos, preferenceMP} = require('../controllers/MercadoPago/index')

router.post('/', preferenceMP)

router.post('/pagos', pagos)

module.exports = router;