/***************
 *   IMPORTS   *
 ***************/
require("dotenv").config();

/****************
 *  CLASS VARS  *
 ****************/
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const app = express();
const charactersController = require("./controllers/characters");
const randomCharController = require("./controllers/randomChar");
const PORT = process.env.PORT;
const MONGOURI = process.env.MONGODB_URI;
const SECRET = process.env.SECRET_KEY;

/***************
 *   APP.USE   *
 ***************/
app.use(cors());
app.use(express.json());
app.use("/api/characters", charactersController);
app.use("/api/randomChar", randomCharController);

/**************
 *  MONGOOSE  *
 ***************/
mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));
mongoose.connection.once("open", () => {
  console.log("connected to mongoose!!!");
});

/********************
 * HELPER FUNCTIONS *
 ********************/
function createPasswordHash(password, salt) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(salt));
}

/*********************
 *  ROUTE: REGISTER  *
 *********************/
app.post("api/register", (req, res) => {
  req.body.password = createPasswordHash(req.body.password, 10);

  User.create(req.body, (err, createdUser) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(createdUser);
    }
  });
});

/******************
 *  ROUTE: LOGIN  *
 ******************/
app.post("api/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });

    if (bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ username: user.username }, SECRET);

      res.status(200).json({ token, username, authenticated: true });
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

/********************
 *  PORT  *
 ********************/
app.listen(PORT, () => {
  console.log("🎉🎊", "celebrations happening on port", PORT, "🎉🎊");
});
