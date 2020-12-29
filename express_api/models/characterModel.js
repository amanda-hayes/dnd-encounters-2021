const { Schema, model } = require('mongoose');

const characterSchema = Schema({
    type: { type: String, required: false },
    name: { type: String, required: true },
    race: { type: String, required: true },
    class: { type: String, required: true },
    pronouns: { type: String, required: false },
    HP: { type: Number, required: false },
    attack: { type: String, required: false },
    catchphrases: { type: Object, required: false },

});

module.exports = model('Character', characterSchema);