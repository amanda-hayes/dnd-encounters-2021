const { Schema, model } = require('mongoose');

const monsterSchema = Schema({
    name: { type: String, required: true },
    race: { type: String, required: true },

});

module.exports = model('Monster', monsterSchema);