const express = require("express");
const { getItems, getItem, createItem } = require("../controllers/file");
const router = express.Router();

/* TODO GET,POST,DELETE,PUT */

router.get("/", getItems);
router.post("/", createItem);

module.exports = router;
