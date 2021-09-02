const { Router } = require("express");
const e = require("express");
const router = Router();
const { finalUserCreate } = require("../controllers/FinalUsers");
const {
  postNewRequest,
  deleteRequest,
} = require("../controllers/FinalUsers/jobRequest");
const {
  finalUserModifier,
} = require("../controllers/FinalUsers/finalUserModifier");

const {
  finalUsersDetails,
} = require("../controllers/FinalUsers/finalUserDetail");

router.post("/create", finalUserCreate);

router.post("/newRequest", postNewRequest);

router.delete("/request/:id", deleteRequest);

router.put("/:id", finalUserModifier);

router.get("/:id", finalUsersDetails);

module.exports = router;
