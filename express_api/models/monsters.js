const { Schema, model } = require('mongoose');

const monsterSchema = Schema({
    name: { type: String, required: true },
    race: { type: String, required: true },
    characterClass: { type: String, required: true },
    pronouns: { type: String, required: false },
    HP: { type: Number, required: false },
    weapon: { type: String, required: false },
    attack: { type: String, required: false },
    armorClass: { type: Number, required: true },
    catchphrases: {type: String, required: false },
});

module.exports = model('Monster', monsterSchema);