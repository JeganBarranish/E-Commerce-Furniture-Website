const express = require("express");
const { signup, login } = require("../controllers/authController");
const { signupValidator, loginValidator } = require("../validators/authValidators");
const { handleValidationErrors } = require("../middleware/validation");

const router = express.Router();

router.post("/signup", signupValidator, handleValidationErrors, signup);
router.post("/login", loginValidator, handleValidationErrors, login);

module.exports = router;



