const {Schema, model} = require('mongoose');

const userSchema = Schema({
    username: { type: String, required: true },
    password: { type: String },
    email: { type: String, required: false }
})

module.exports = model('User', userSchema);