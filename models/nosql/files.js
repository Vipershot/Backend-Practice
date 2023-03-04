const mongoose = require("mongoose");

const FileScheme = new mongoose.Schema(
  {
    fileName: {
      type: String,
    },
    mediaId: {
      type: String,
    },
  },
  {
    timestamps: true /* TODO createAt, updateAt */,
    versionKey: false,
  }
);

module.exports = mongoose.model("file", FileScheme);
