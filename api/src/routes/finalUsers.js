const { Router } = require("express");
const e = require("express");
const router = Router();

// requerimos los controller

const { finalUserCreate } = require("../controllers/FinalUsers");

const {
  postNewRequest,
  deleteRequest,
  requestModifier,
  getRequest,
} = require("../controllers/FinalUsers/jobRequest");

const {
  finalUserModifier,
} = require("../controllers/FinalUsers/finalUserModifier");

const {
  finalUsersDetails,
} = require("../controllers/FinalUsers/finalUserDetail");

const { finalUserAll } = require("../controllers/FinalUsers/finalUsersAll");

//creamos las rutas

router.post("/create", finalUserCreate);

router.post("/request", postNewRequest);

router.delete("/request/:id", deleteRequest);

router.put("/:id", finalUserModifier);

router.put("/request/:id", requestModifier);

router.get("/:id", finalUsersDetails);

router.get("/request", getRequest);

router.get("/", finalUserAll);

module.exports = router;
