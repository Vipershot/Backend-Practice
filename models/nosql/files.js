const mongoose = require("mongoose");

const FileScheme = new mongoose.Schema(
  {
    fileName: {
      type: String,
    },
    mediaId: {
      type: mongoose.Types.ObjectId,
    },
  },
  {
    timestamps: true /* TODO createAt, updateAt */,
    versionKey: false,
  }
);

module.exports = mongoose.model("file", FileScheme);
