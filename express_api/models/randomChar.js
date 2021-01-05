const { Schema, model } = require('mongoose');

const randomCharSchema = Schema({
    name: { type: String, required: true },
    race: { type: String, required: true },
    characterClass: { type: String, required: true },
    pronouns: { type: String, required: false },
    HP: { type: Number, required: false },
    weapon: { type: String, required: false },
    attack: { type: String, required: false },
    armorClass: { type: Number, required: true },
    catchphrases: {type: String, required: false },
    image: {type: String, required: false },
    backstory: {type: String, required: false },
    thumbnail: { type: String, required: false },
    initiative: { type: Number, required: false },
    characterType: { type: String, required: false }
});

module.exports = model('Random Char', randomCharSchema);


// strength: { type: String, required: false },
// dexterity: { type: String, required: false },
// constitution: { type: String, required: false },
// intelligence: { type: String, required: false },
// wisdom: { type: String, required: false },
// charisma: { type: String, required: false },
// backstory: { type: String, required: false }