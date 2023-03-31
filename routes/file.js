const express = require("express");
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/file");
const checkRole = require("../middleware/role");
const authMiddleware = require("../middleware/session");
const { validatorCreateItem, validatorGetItem } = require("../validator/file");
const router = express.Router();

/* TODO GET,POST,DELETE,PUT */

router.get("/", authMiddleware, getItems);
router.get("/:id", validatorGetItem, getItem);
router.post(
  "/",
  authMiddleware,
  checkRole(["admin"]),
  validatorCreateItem,
  createItem
);
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;
