const { Schema, model } = require('mongoose');

const randomCharSchema = Schema({
    name: { type: String, required: true },
    race: { type: String, required: true },
    characterClass: { type: String, required: true },
    pronouns: { type: String, required: false },
    HP: { type: Number, required: false },
    attack: { type: String, required: false },
    weapon: { type: String, required: false },
    catchphrases: { type: String, required: false },

});

module.exports = model('Random Char', randomCharSchema);