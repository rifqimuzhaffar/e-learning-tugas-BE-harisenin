const express = require("express");

const router = express.Router();

const { index } = require("../controllers/kelas.controller");

router.get("/", index);

module.exports = router;
