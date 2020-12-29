const { Schema, model } = require('mongoose');

const monsterSchema = Schema({
    name: { type: String, required: true },
    race: { type: String, required: true },
    conversation: {type: String, required: false }

});

module.exports = model('Monster', monsterSchema);