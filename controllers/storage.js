const { storageModel } = require("../models/index");
const cloudinary = require("../utils/cloudinary");
const PUBLIC_URL = process.env.PUBLIC_URL;

const getItems = async (req, res) => {
  const data = await storageModel.find({});
  res.send({ data });
};
const getItem = (req, res) => {};

const createItem = async (req, res) => {
  try {
    const { file, image } = req;
    console.log(file);
    const result = await cloudinary.uploader.upload(image, {
      folder: "storage",
      width: 300,
      crop: "scale",
    });
    const fileData = {
      filename: result.filename,
      url: `${PUBLIC_URL}/${result.filename}`,
    };
    const data = await storageModel.create(fileData);
    res.send({ data });
  } catch (error) {
    console.log(error);
  }
};
const updateItems = (req, res) => {};
const deleteItems = (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItems, deleteItems };
