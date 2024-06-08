const express = require("express");

const router = express.Router();

const { verifyToken } = require("../middlewares/auth");
const { index } = require("../controllers/matapelajaran.controller");

router.get("/:id_mode", verifyToken, index);

module.exports = router;
