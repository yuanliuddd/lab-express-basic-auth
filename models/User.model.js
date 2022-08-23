const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: Schema.Types.String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
    validate: [validator.notEmpty, "Empty User Name"],
  },
  passwordHashed: {
    type: Schema.Types.String,
    required: true,
    validate: [validator.notEmpty, "Empty Password"],
  },
});

const User = model("User", userSchema);

module.exports = User;
