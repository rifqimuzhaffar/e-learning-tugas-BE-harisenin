const express = require("express");

const router = express.Router();

const { index } = require("../controllers/matapelajaran.controller");

router.get("/:id_mode", index);

module.exports = router;
