const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const charactersController = require('./controllers/characters.js')

app.use('/characters', charactersController);

app.listen(PORT, () => {
    console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊');
});
