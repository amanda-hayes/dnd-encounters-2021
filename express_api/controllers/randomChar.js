/****************
 *  CLASS VARS  *
 ****************/
const express = require("express");
const randcomCharRouter = express.Router();
const randomCharModel = require("../models/randomChar.js");

/****************
 *  ROUTE: GET  *
 ****************/
randcomCharRouter.get("/", async (req, res) => {
  try {
    const foundRandomCharacter = await randomCharModel.find({});
    res.status(200).json(foundRandomCharacter);
  } catch (error) {
    res.status(400).json(error);
  }
});

/*******************
 *  ROUTE: DELETE  *
 *******************/
randcomCharRouter.delete("/:id", async (req, res) => {
  try {
    const deletedCharacter = await randomCharModel.findByIdAndRemove(
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
randcomCharRouter.put("/:id", async (req, res) => {
  try {
    const updatedCharacter = await randomCharModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedCharacter);
  } catch (error) {
    res.status(400).json(error);
  }
});

/******************
 *  ROUTE: POST  *
 ******************/
randcomCharRouter.post("/", async (req, res) => {
  try {
    const createdRandomCharacter = await randomCharModel.create(req.body);
    res.status(200).json(createdRandomCharacter);
  } catch (error) {
    res.status(400).json(error);
  }
});

/***********************
 *  ROUTE: GET (SHOW)  *
 ***********************/
randcomCharRouter.get("/:id", async (req, res) => {
  try {
    const foundRandomCharacter = await randomCharModel.findById(
      req.body,
      (createdBy = "600cdecd78275026de953dee")
    );
    res.status(200).json(foundRandomCharacter);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = randcomCharRouter;
