const { storageModel } = require("../models/index");
const cloudinary = require("../utils/cloudinary");
const { handleHttpError } = require("../utils/handleError");
const PUBLIC_URL = process.env.PUBLIC_URL;

const getItems = async (req, res) => {
  try {
    const data = await storageModel.find({});
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ALL_STORAGE");
  }
};
const getItem = (req, res) => {};

const createItem = async (req, res) => {
  try {
    const { file } = req;
    console.log(file);
    const result = await cloudinary.uploader.upload(file, {
      folder: "storage",
      width: 300,
      crop: "scale",
    });
    const fileData = {
      fileName: file.fileName,
      url: `${PUBLIC_URL}/${file.fileName}`,
    };
    const data = await storageModel.create(fileData);
    console.log(result);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_STORAGE");
  }
};
const updateItems = (req, res) => {};
const deleteItems = (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItems, deleteItems };
