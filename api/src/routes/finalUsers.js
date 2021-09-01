const { Router } = require("express");
const e = require("express");
const router = Router();
const {
  postNewRequest,
  deleteRequest,
} = require("../controllers/FinalUsers/jobRequest");
const {
  finalUserModifier,
} = require("../controllers/FinalUsers/finalUserModifier");

router.post("/newRequest", postNewRequest);

router.delete("/request/:id", deleteRequest);

router.put("/:id", finalUserModifier);

module.exports = router;
