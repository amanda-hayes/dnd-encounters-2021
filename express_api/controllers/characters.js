const express = require("express");
const charactersRouter = express.Router();
const characterModel = require("../models/characterModel.js");

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
charactersRouter.delete("/:id", async (req, res) => {
  try {
    const deletedCharacter = await characterModel.findByIdAndRemove(
      req.params.id
    );
    res.status(200).json(deletedCharacter);
  } catch (error) {
    res.status(400).json(error);
  }
});

/***************
 * UPDATE ROUTE *
 ****************/
charactersRouter.put("/:id", async (req, res) => {
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
charactersRouter.post("/", async (req, res) => {
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
