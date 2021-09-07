const Router = require("express");
const router = Router();

const { signUp, signin } = require("../controllers/Auth");

const {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
} = require("../middlewares");
router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post(
  "/signup",
  [checkDuplicateUsernameOrEmail, checkRolesExisted],
  signUp
);

router.post("/signin", signin);

module.exports = router;
