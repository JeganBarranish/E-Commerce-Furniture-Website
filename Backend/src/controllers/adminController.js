const User = require("../models/User");

async function getAllUsers(req, res) {
  try {
    const users = await User.find({}).select("-passwordHash").sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    console.error("Get all users error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = { getAllUsers };

