const mongoose = require("mongoose");
require("../config/mongoose");

const playerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name cannot be blank"],
      minlength: [2, "Name must be at least 2 characters"]
    },
    pos: {
      type: String
    },
    game1: {
      type: String
    },
    game2: {
      type: String
    },
    game3: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Player", playerSchema);
