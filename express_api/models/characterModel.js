const { Schema, model } = require('mongoose');

const characterSchema = Schema({
    name: { type: String, required: true },
    race: { type: String, required: true },
    class: { type: String, required: true },
    pronouns: { type: String, required: false },

});

module.exports = model('Character', characterSchema);