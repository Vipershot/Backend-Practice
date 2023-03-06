const express = require("express");
const { getItems, getItem, createItem } = require("../controllers/file");
const {validatorCreateItem} = require("../validator/file")
const router = express.Router();

/* TODO GET,POST,DELETE,PUT */

router.get("/", getItems);
router.get("/:id", getItem);
router.post("/", validatorCreateItem, createItem);

module.exports = router;
