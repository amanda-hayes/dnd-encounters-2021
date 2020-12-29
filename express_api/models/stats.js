const { Schema, model } = require('mongoose');

const statsSchema = Schema({
    Strength: { type: Number, required: true },
    Dexterity: { type: Number, required: true },
    Constitution: { type: Number, required: true },
    Intelligence: { type: Number, required: true },
    Wisdom: { type: Number, required: true },
    Charisma: { type: Number, required: true}
});

module.exports = model('Stats', statsSchema);