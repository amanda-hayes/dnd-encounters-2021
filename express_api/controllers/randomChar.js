const express = require('express');
const randomChar = express.Router(); 
const randomCharModel = require('../models/randomChar.js');


/***************
* INDEX ROUTE *
****************/
randomChar.get('/', async (req, res) => {
    try {
        const foundRandomCharacter = await randomCharModel.find({});
        res.status(200).json(foundRandomCharacter);
    } catch (error) {
        res.status(400).json(error);
    }
});


/***************
* DELETE ROUTE *
****************/
randomChar.delete('/:id', async (req, res) => {
    try {
        const deletedCharacter = await randomCharModel.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedCharacter);
    } catch (error) {
        res.status(400).json(error);
    }
});


/***************
* UPDATE ROUTE *
****************/
randomChar.put('/:id', async (req, res) => {
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


/***************
* CREATE ROUTE *
****************/
randomChar.post('/', async (req, res) => {
    try {
        const createdRandomCharacter = await randomCharModel.create(req.body);
        res.status(200).json(createdRandomCharacter);
    } catch (error) {
        res.status(400).json(error);
    }
});

/***************
* SHOW ROUTE *
****************/
randomChar.get('/:id', async (req, res) => {
    try {
        const foundRandomCharacter = await randomCharModel.findById(req.body);
        res.status(200).json(foundRandomCharacter);
    } catch (error) {
        res.status(400).json(error);
    }
});



module.exports = randomChar;