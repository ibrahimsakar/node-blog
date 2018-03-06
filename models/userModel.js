const mongoose             = require("mongoose"),
      passportLocalMachine = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

userSchema.plugin(passportLocalMachine);

module.exports = mongoose.model("Users", userSchema);