const mongoose = require("mongoose");

const FileScheme = new mongoose.Schema(
  {
    fileName: {
      type: String,
    },
    mediaId: {
      type: mongoose.Types.ObjectId,
    },
    role: {
      type: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true /* TODO createAt, updateAt */,
    versionKey: false,
  }
);

module.exports = mongoose.model("file", FileScheme);
