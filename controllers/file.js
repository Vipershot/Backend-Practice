const {filesModels} = require("../models")

const getItems = async (req,res) => {
    const data = await filesModels.find({});
    res.send({ data });
}
const getItem = (req,res) => {}
const createItems = (req,res) => {}
const updateItems = (req,res) => {}
const deleteItems = (req,res) => {}

module.exports = {getItems, getItem, createItems, updateItems, deleteItems}