const mongoose = require("mongoose");

const StorageScheme = new mongoose.Schema(
  {
    fileName: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("storage", StorageScheme);
