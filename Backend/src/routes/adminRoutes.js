const express = require("express");
const { getAllUsers } = require("../controllers/adminController");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/users", auth, getAllUsers);

module.exports = router;

