const { storageModel } = require("../models/index");
const { handleHttpError } = require("../utils/handleError");
const PUBLIC_URL = process.env.PUBLIC_URL;

const getItems = async (req, res) => {
  try {
    const data = await storageModel.find({});
    res.send({ data });
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
  }
};

const createItem = async (req, res) => {
  try {
    const { file } = req;
    console.log(file);
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
  }
};

module.exports = { getItems, getItem, createItem, updateItems, deleteItems };
