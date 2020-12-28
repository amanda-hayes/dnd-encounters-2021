require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const characterModel = require('./models/characterModel.js')
const app = express();
const characterRouter = express.Router();

const PORT = process.env.PORT || 7000;
const MONGOURI =
    process.env.MONGODB_URI;

app.use(express.json());
app.use('/characters', characterRouter);

mongoose.connection.on('error', (err) =>
console.log(err.message + ' is Mongod not running?')
);
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongoose!!!');
});

// ROUTES //

/***************
* READ ROUTE *
****************/
characterRouter.get('/', async (req, res) => {
    try {
        const foundCharacters = await characterModel.find({});
        console.log(foundCharacters);
        res.status(200).json(foundCharacters);
    } catch(error){
        res.status(400).json(error)
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





app.listen(PORT, () => {
    console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊');
});
