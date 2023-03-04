const mongoose = require("mongoose");

const StorageScheme = new mongoose.Schema(
  {
    filename: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  {
    timestamps: true /* TODO createAt, updateAt */,
    versionKey: false,
  }
);

module.exports = mongoose.model("storage", StorageScheme);
