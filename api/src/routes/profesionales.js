const { Router } = require('express');
const router = Router()
const e = require('express');

router.get('/', async (req, res, next) => {
    const {especialidad, zona} = req.query
    try {
        res.send('estoy en /profesionales para filtrado')
    } catch (error) {
        next(error)
    }
})


module.exports = router