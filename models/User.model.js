const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  userName: {
    type: Schema.Types.String,
    unique: true,
    required: true,
    trim: true,
    // validate: ["validator".notEmpty, "Empty User Name"],
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
});

const User = model("User", userSchema);

module.exports = User;
