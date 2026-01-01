const express = require("express");
const {
  listTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
} = require("../controllers/taskController");
const auth = require("../middleware/auth");
const { createTaskValidator, updateTaskValidator } = require("../validators/taskValidators");
const { handleValidationErrors } = require("../middleware/validation");

const router = express.Router();

router.get("/", auth, listTasks);
router.post("/", auth, createTaskValidator, handleValidationErrors, createTask);
router.get("/:id", auth, getTask);
router.put("/:id", auth, updateTaskValidator, handleValidationErrors, updateTask);
router.delete("/:id", auth, deleteTask);

module.exports = router;



