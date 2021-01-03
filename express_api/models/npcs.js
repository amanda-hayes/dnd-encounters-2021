const { Schema, model } = require('mongoose');

const npcSchema = Schema({
    name: { type: String, required: true },
    race: { type: String, required: true },
    characterClass: { type: String, required: true },
    pronouns: { type: String, required: false },
    backstory: { type: String, required: false },
    actions: { type: String, required: true },
    weapon: { type: String, required: true },
    catchphrases: { type: String, required: true}
});

module.exports = model('NPC', npcSchema);