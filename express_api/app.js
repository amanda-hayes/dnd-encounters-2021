require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const app = express();

const User = require('./models/user');

const PORT = process.env.PORT || 7000;
const charactersController = require("./controllers/characters");
const randomCharController = require("./controllers/randomChar");
const MONGOURI = process.env.MONGODB_URI;

const SECRET = 'thedeathofabachelorohlettingthewaterfall'

const auth = async (req, res, next) => {
    const { authorization } = req.headers;

    if(authorization){
      const token = authorization.split(' ')[1];

      try {
        const payload = await jwt.verify(token, SECRET)
        req.user = payload;
        next();
      } catch (error) {
        res.status(400).json
      }
    } else {
        
      res.status(400).json( new Error('no token in header'))
    }
}

app.use(cors());
app.use(express.json());
app.use("/characters", charactersController);
app.use("/randomChar", randomCharController);

mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("connected to mongoose!!!");
});

// REGISTER/LOGIN 

app.post('/register', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (err, createdUser) => {
    if(err){
      res.status(400).json(err)
    } else {
      res.status(200).json(createdUser)
    }
  })
})

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username })
    if (bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({
        username: user.username
      }, SECRET)
      res.status(200).json({
        token,
        username,
        authenticated: true
      })
    }
  } catch (error) {
    res.status(400).json(error)
  }
})




// DO NOT CODE below here

app.listen(PORT, () => {
  console.log("🎉🎊", "celebrations happening on port", PORT, "🎉🎊");
});
