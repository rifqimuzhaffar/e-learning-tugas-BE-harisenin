const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "../.env") });

const express = require("express");

const app = express();

const authRouter = require("./routes/auth.route");
const kelasRouter = require("./routes/kelas.route");
const mataPelajaranRouter = require("./routes/matapelajaran.route");
const babRouter = require("./routes/bab.route");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/kelas", kelasRouter);
app.use("/api/matapelajaran", mataPelajaranRouter);
app.use("/api/bab", babRouter);

app.listen(process.env.SERVER_PORT || 4000, () => {
  console.log("Server Running");
});
