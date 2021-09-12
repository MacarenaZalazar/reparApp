const { Router } = require("express");
const router = Router();
const jobTypeModifier = require("../controllers/Admin/jobTypesModifier");
const jobTypeDelete = require("../controllers/Admin/deleteJobType");
const { isAdmin, verifyToken } = require("../middlewares/index");
const banUserorWorkOrder = require("../controllers/Admin/banUserWorkOrder");
const allUsers = require("../controllers/Admin/allUsers");
const banUser = require("../controllers/Admin/banUser");


router.put("/", [verifyToken, isAdmin], jobTypeModifier);
router.delete("/", [verifyToken, isAdmin], jobTypeDelete);
router.put("/ban/work", [verifyToken, isAdmin], banUserorWorkOrder);
router.put("/ban/user", banUser);
router.get("/allUsers", [verifyToken, isAdmin], allUsers);


module.exports = router;
