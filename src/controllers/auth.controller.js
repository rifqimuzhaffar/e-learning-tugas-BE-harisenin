const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { user: UserModel } = require("../models");

const login = async (req, res, next) => {
  const { email, password } = req.body;

  console.log("Data", [email, password]);

  const user = await UserModel.findOne({ where: { email } });
  if (!user) {
    return res.status(401).send({
      message: "Invalid email/password",
    });
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return res.status(401).send({
      message: "Invalid email/password",
    });
  }

  const data = {
    id: user.id,
    email: user.email,
  };
  const token = jwt.sign(data, process.env.JWT_SECRET);

  return res.send({
    message: "Login Successful",
    data: {
      token,
    },
  });
};

module.exports = { login };
