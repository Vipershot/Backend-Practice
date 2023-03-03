const express = require("express");
const router = express.Router();

/* TODO GET,POST,DELETE,PUT */

router.get("/file", (req, res) => {
  const data = ["hola", "mundo"];
  res.send({ data });
});

module.exports = router;
