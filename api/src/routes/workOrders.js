const { Router } = require("express");
const router = Router();
const { reportWork } = require("../controllers/Users");
const {
  postNewRequest,
  deleteRequest,
  requestModifier,
  getRequest,
  getRequestFiltered,
  getRequestsByIDFinal,
  getRequestsByIDTech,
  getDetailsRequest,
} = require("../controllers/FinalUsers/jobRequest");

const { verifyToken, isuserFinal, isuserTech } = require("../middlewares");

router.delete("/:id", [verifyToken, isuserFinal], deleteRequest);

router.post("/", [verifyToken, isuserFinal], postNewRequest);

// router.put("/:id", [verifyToken, isuserFinal, isuserTech], requestModifier);
router.put("/report", reportWork);

router.put("/:id", requestModifier);

router.get("/", getRequest);

router.get("/filtered", getRequestFiltered);

// router.get("/all/:id", [verifyToken], getRequestsByID);
router.get("/all/:id", getRequestsByIDFinal);

router.get("/allTech/:id", getRequestsByIDTech);

router.get("/details/:id", getDetailsRequest);


module.exports = router;
