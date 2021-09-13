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

router.put("/", [verifyToken, isAdmin], jobTypeModifier);
router.delete("/", [verifyToken, isAdmin], jobTypeDelete);
router.put("/ban/work", [verifyToken, isAdmin], banUserorWorkOrder);
router.put("/ban/user", [verifyToken, isAdmin], banUser);
router.get("/allUsers", [verifyToken, isAdmin], allUsers);
router.get("reported/users", [verifyToken, isAdmin], getReportedUsers);
router.get(
  "reported/workOrders",
  [verifyToken, isAdmin],
  getReportedWorkOrders
);
router.post("reported/users:id", [verifyToken, isAdmin], changeReportedUser);
router.post(
  "reported/workOrders/:id",
  [verifyToken, isAdmin],
  changeReportedWorkOrder
);
router.get("/userbyuserName", getByUserName);

module.exports = router;
