const express = require("express");
const { createItem, getItems } = require("../controllers/storage");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");

router.get("/", getItems);
router.post("/", uploadMiddleware.single("myFile"), createItem);

module.exports = router;
