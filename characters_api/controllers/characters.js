const express = require('express');
const characters = express.Router(); 

characters.get('/', (req, res) => {
    res.send('index');
});

module.exports = characters;

