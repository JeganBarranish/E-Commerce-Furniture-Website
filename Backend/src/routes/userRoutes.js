const express = require("express");
const { getMe, updateMe } = require("../controllers/userController");
const auth = require("../middleware/auth");
const { updateProfileValidator } = require("../validators/userValidators");
const { handleValidationErrors } = require("../middleware/validation");

const router = express.Router();

router.get("/me", auth, getMe);
router.put("/me", auth, updateProfileValidator, handleValidationErrors, updateMe);

module.exports = router;



