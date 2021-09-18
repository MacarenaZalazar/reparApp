const { Router } = require("express");
const router = Router();
const {pagos, preferenceMP} = require('../controllers/MercadoPago/index')

router.get('/', preferenceMP)

router.get('/pagos', pagos)

module.exports = router;