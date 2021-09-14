const { Router } = require("express");
const router = Router();

const {
  postNewRequest,
  deleteRequest,
  requestModifier,
  getRequest,
  getRequestFiltered,
  getRequestsByID,
  getDetailsRequest,
} = require("../controllers/FinalUsers/jobRequest");

const { verifyToken, isuserFinal } = require("../middlewares");

router.delete("/:id", [verifyToken, isuserFinal], deleteRequest);

router.post("/", [verifyToken, isuserFinal], postNewRequest);

router.put("/:id", [verifyToken, isuserFinal], requestModifier);

router.get("/", getRequest);

router.get("/filtered", getRequestFiltered);

router.get("/all/:id", [verifyToken], getRequestsByID);

router.get("/details/:id", getDetailsRequest);

module.exports = router;
