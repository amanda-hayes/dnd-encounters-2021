/****************
 *  CLASS VARS  *
 ****************/
const express = require("express");
const charactersRouter = express.Router();
const characterModel = require("../models/characterModel.js");

/**********
 *  AUTH  *
 **********/
const auth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    const token = authorization.split(" ")[1];
    try {
      const payload = await jwt.verify(token, SECRET);
      req.user = payload;
      next();
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    res.status(400).json(new Error("no token in header"));
  }
};

/****************
 *  ROUTE: GET  *
 ****************/
charactersRouter.get("/", async (req, res) => {
  try {
    const foundCharacter = await characterModel.find({});
    res.status(200).json(foundCharacter);
  } catch (error) {
    res.status(400).json(error);
  }
});

/*******************
 *  ROUTE: DELETE  *
 *******************/
charactersRouter.delete("/:id", auth, async (req, res) => {
  try {
    const deletedCharacter = await characterModel.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json(deletedCharacter);
  } catch (error) {
    res.status(400).json(error);
  }
});

/****************
 *  ROUTE: PUT  *
 ****************/
try {
  charactersRouter.put("/:id", async (req, res) => {
    const updatedCharacter = await characterModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    res.status(200).json(updatedCharacter);
  });
} catch (error) {
  res.status(400).json(error);
}

/******************
 *  ROUTE: POST  *
 ******************/
charactersRouter.post("/", async (req, res) => {
  try {
    const createdCharacter = await characterModel.create(req.body);
    res.status(200).json(createdCharacter);
  } catch (error) {
    res.status(400).json(error);
  }
});

/***********************
 *  ROUTE: GET (SHOW)  *
 ***********************/
charactersRouter.get("/:id", async (req, res) => {
  try {
    const foundCharacter = await characterModel.findById(req.params.id);
    console.log(foundCharacter);
    res.status(200).json(foundCharacter);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = charactersRouter;
