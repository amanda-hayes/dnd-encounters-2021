const express = require('express');
const characterRouter = express.Router(); 
const characterModel = require('../models/characters.js');


/***************
* INDEX ROUTE *
****************/
characterRouter.get('/', async (req, res) => {
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
characterRouter.delete('/:id', async (req, res) => {
    try {
        const deletedCharacter = await characterModel.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedCharacter);
    } catch (error) {
        res.status(400).json(error);
    }
});


/***************
* UPDATE ROUTE *
****************/
characterRouter.put('/:id', async (req, res) => {
    try {
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
characterRouter.post('/', async (req, res) => {
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
characterRouter.get('/:id', async (req, res) => {
    try {
        const foundCharacter = await characterModel.findById(req.body);
        res.status(200).json(foundCharacter);
    } catch (error) {
        res.status(400).json(error);
    }
});



module.exports = characterRouter;