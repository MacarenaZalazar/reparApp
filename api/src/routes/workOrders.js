const { Router } = require("express");
const router = Router();

const {
  postNewRequest,
  deleteRequest,
  requestModifier,
  getRequest,
} = require("../controllers/FinalUsers/jobRequest");

router.delete("/:id", deleteRequest);

router.post("/", postNewRequest);

router.put("/:id", requestModifier);

router.get("/", getRequest);

module.exports = router;
