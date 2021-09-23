const { Router } = require("express");
const router = Router();
const jobTypeModifier = require("../controllers/Admin/jobTypesModifier");
const jobTypeDelete = require("../controllers/Admin/deleteJobType");
const { isAdmin, verifyToken } = require("../middlewares/index");
const banUserorWorkOrder = require("../controllers/Admin/banUserWorkOrder");
const allUsers = require("../controllers/Admin/allUsers");
const banUser = require("../controllers/Admin/banUser");
const {
  getReportedUsers,
  getReportedWorkOrders,
  changeReportedUser,
  changeReportedWorkOrder,
} = require("../controllers/Admin/reportedRoutes");
const { getByUserName } = require("../controllers/Users/index");

router.put(
  "/reported/workOrders/:id",
   changeReportedWorkOrder
);
router.put("/reported/users/:id", changeReportedUser);
router.put("/", [verifyToken, isAdmin], jobTypeModifier);
router.put("/put", [verifyToken, isAdmin], jobTypeDelete);
router.put("/ban/work", [verifyToken, isAdmin], banUserorWorkOrder);
router.put("/ban/user", [verifyToken, isAdmin], banUser);
router.get("/allUsers", [verifyToken, isAdmin], allUsers);
router.get("/reported/users", [verifyToken, isAdmin], getReportedUsers);
router.get(
  "/reported/workOrders",
  [verifyToken, isAdmin],
  getReportedWorkOrders
);
router.get("/userbyuserName", getByUserName);

module.exports = router;
