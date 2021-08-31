const { Router } = require('express');
const e = require('express');
const router = Router()
const {postNewRequest, deleteRequest} = require('../controllers/FinalUsers/jobRequest')

router.post('/newRequest', postNewRequest)

router.delete('/request/:id', deleteRequest)

module.exports = router