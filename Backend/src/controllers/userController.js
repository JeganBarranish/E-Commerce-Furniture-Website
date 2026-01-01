const User = require("../models/User");
const bcrypt = require("bcrypt");

async function getMe(req, res) {
  try {
    const user = await User.findById(req.userId).select("-passwordHash");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error("Get profile error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

async function updateMe(req, res) {
  try {
    const updates = {};
    const { name, email, password } = req.body;

    if (name) updates.name = name.trim();
    if (email) updates.email = email.toLowerCase().trim();

    if (password) {
      const passwordHash = await bcrypt.hash(password, 10);
      updates.passwordHash = passwordHash;
    }

    const user = await User.findByIdAndUpdate(req.userId, updates, {
      new: true
    }).select("-passwordHash");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    console.error("Update profile error:", err);
    if (err.code === 11000) {
      return res.status(409).json({ message: "Email already in use" });
    }
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = { getMe, updateMe };


