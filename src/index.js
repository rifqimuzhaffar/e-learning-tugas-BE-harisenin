const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "../.env") });

const express = require("express");

const app = express();

const authRouter = require("./routes/auth.route");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(process.env.SERVER_PORT || 4000, () => {
  console.log("Server Running");
});
