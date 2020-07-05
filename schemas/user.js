const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Email is invalid"],
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    select: false,
  },
  clearance: {
    type: String,
    enum: {
      values: ["level 1", "level 2", "admin"],
      message: "The clearance value is invalid",
    },
    default: "level 1",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
