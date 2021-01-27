const express = require("express");
const charactersRouter = express.Router();
const characterModel = require("../models/characterModel.js"); 
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET_KEY;

const auth = async (req, res, next) => {
  const { authorization } = req.headers;
  if(authorization){
    const token = authorization.split(' ')[1];
    try {
      const payload = await jwt.verify(token, SECRET)
      req.user = payload;
      next();
    } catch (error) {
      res.status(400).json(error)
    }
  } else {
    res.status(400).json( new Error('no token in header'))
  }
}

/***************
 * INDEX ROUTE *
 ****************/
charactersRouter.get("/", async (req, res) => {
  try {
    const foundCharacter = await characterModel.find({});
    res.status(200).json(foundCharacter);
  } catch (error) {
    res.status(400).json(error);
  }
});

/***************
 * DELETE ROUTE *
 ****************/
charactersRouter.delete("/:id", auth, async (req, res) => {
  try {
    const deletedCharacter = await characterModel.findByIdAndRemove(
      req.params.id
    );
    alert('Are you sure you want to delete this character?')
    // if player clicks yes, then delete character, if no, go back to characters screen
    res.status(200).json(deletedCharacter);
  } catch (error) {
    res.status(400).json(error);
  }
});

/***************
 * UPDATE ROUTE *
 ****************/
charactersRouter.put("/:id", auth, async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.params.id);
    const updatedCharacter = await characterModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedCharacter);
  } catch (error) {
    res.status(400).json(error);
  }
});

/***************
 * CREATE ROUTE *
 ****************/
charactersRouter.post("/", auth, async (req, res) => {
  try {
    const createdCharacter = await characterModel.create(req.body);
    res.status(200).json(createdCharacter);
  } catch (error) {
    res.status(400).json(error);
  }
});

/***************
 * SHOW ROUTE *
 ****************/
charactersRouter.get("/:id", auth, async (req, res) => {
  try {
    const foundCharacter = await characterModel.findById(req.params.id);
    console.log(foundCharacter);
    res.status(200).json(foundCharacter);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = charactersRouter;
