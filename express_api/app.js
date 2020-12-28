require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 7000;
const MONGOURI =
    process.env.MONGODB_URI;

// app.use(cors);
app.use(express.json());


mongoose.connection.on('error', (err) =>
console.log(err.message + ' is Mongod not running?')
);
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongoose!!!');
});


const characterRouter = require('./controllers/characters.js')
    app.use('/characters', characterRouter);


app.listen(PORT, () => {
    console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊');
});
