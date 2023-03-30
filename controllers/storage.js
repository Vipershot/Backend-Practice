const { storageModel } = require("../models/index");
<<<<<<< HEAD
=======
const cloudinary = require("../utils/cloudinary");
>>>>>>> 1100e048dc62da233b6c61993b3feaccf4b8979b
const { handleHttpError } = require("../utils/handleError");
const PUBLIC_URL = process.env.PUBLIC_URL;

const getItems = async (req, res) => {
  try {
    const data = await storageModel.find({});
    res.send({ data });
<<<<<<< HEAD
  } catch (error) {
    handleHttpError(res, "ERROR_FIND_ITEMS");
  }
};
const getItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await storageModel.findById(id);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR FIND_ITEM");
=======
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ALL_STORAGE");
>>>>>>> 1100e048dc62da233b6c61993b3feaccf4b8979b
  }
};

const createItem = async (req, res) => {
  try {
    const { file } = req;
    console.log(file);
<<<<<<< HEAD
    const fileData = {
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`,
    };
    const data = await storageModel.create(fileData);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};
const updateItems = async (req, res) => {
  try {
  } catch (error) {
    handleHttpError();
  }
};
const deleteItems = async (req, res) => {
  try {
  } catch (error) {
    handleHttpError();
=======
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
>>>>>>> 1100e048dc62da233b6c61993b3feaccf4b8979b
  }
};

module.exports = { getItems, getItem, createItem, updateItems, deleteItems };
