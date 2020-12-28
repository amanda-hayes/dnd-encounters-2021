const express = require('express');
const characters = express.Router(); 
const Character = require('../models/characters.js');


/***************
* INDEX ROUTE *
****************/
characters.get('/', async (req, res) => {
    try {
        const foundCharacter = await Character.find({});
        res.status(200).json(foundCharacter);
    } catch (error) {
        res.status(400).json(error);
    }
});


/***************
* DELETE ROUTE *
****************/
characters.delete('/:id', async (req, res) => {
    try {
        const deletedCharacter = await Character.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedCharacter);
    } catch (error) {
        res.status(400).json(error);
    }
});


/***************
* UPDATE ROUTE *
****************/
characters.put('/:id', async (req, res) => {
    try {
        const updatedCharacter = await Character.findByIdAndUpdate(
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
characters.post('/', async (req, res) => {
    try {
        const createdCharacter = await Character.create(req.body);
        res.status(200).json(createdCharacter);
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = characters;