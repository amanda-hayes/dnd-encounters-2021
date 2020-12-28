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

characterRouter.get('/', async (req, res) => {
    try {
        const foundCharacters = await characterModel.find({});
        console.log(foundCharacters);
        res.status(200).json(foundCharacters);
    } catch(error){
        res.status(400).json(error)
    }
});


app.listen(PORT, () => {
    console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊');
});
