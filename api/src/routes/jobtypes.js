const { Router } = require("express");
const router = Router();
const getJobType = require("../controllers/jobType/getJobType");

router.get("/", getJobType);

module.exports = router;
