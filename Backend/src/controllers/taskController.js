const Task = require("../models/Task");

async function listTasks(req, res) {
  try {
    const { q, completed } = req.query;
    const filter = { user: req.userId };

    if (typeof completed !== "undefined") {
      filter.completed = completed === "true";
    }

    if (q) {
      filter.title = { $regex: q, $options: "i" };
    }

    const tasks = await Task.find(filter).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    console.error("List tasks error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

async function createTask(req, res) {
  try {
    const { title, description } = req.body;

    const task = await Task.create({
      user: req.userId,
      title: title.trim(),
      description: description ? description.trim() : undefined
    });

    res.status(201).json(task);
  } catch (err) {
    console.error("Create task error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

async function getTask(req, res) {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      user: req.userId
    });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (err) {
    console.error("Get task error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

async function updateTask(req, res) {
  try {
    const updates = {};
    const { title, description, completed } = req.body;

    if (typeof title !== "undefined") updates.title = title.trim();
    if (typeof description !== "undefined") updates.description = description ? description.trim() : "";
    if (typeof completed !== "undefined") updates.completed = completed;

    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      updates,
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
  } catch (err) {
    console.error("Update task error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

async function deleteTask(req, res) {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.userId
    });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json({ message: "Task deleted" });
  } catch (err) {
    console.error("Delete task error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = {
  listTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
};



