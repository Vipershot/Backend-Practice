const express = require("express");
const { getItems, getItem } = require("../controllers/file");
const router = express.Router();

/* TODO GET,POST,DELETE,PUT */

router.get("/", getItems);
router.get("/:id", getItem);

module.exports = router;
