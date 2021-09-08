const { Router } = require("express");
const router = Router();
const jobTypeModifier = require("../controllers/Admin/jobTypesModifier");
const jobTypeDelete = require("../controllers/Admin/deleteJobType");
const { isAdmin, verifyToken } = require("../middlewares/index");

router.put("/", [verifyToken, isAdmin], jobTypeModifier);
router.delete("/", [verifyToken, isAdmin], jobTypeDelete);

module.exports = router;
