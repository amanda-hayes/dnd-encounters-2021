const {Schema, model} = require('mongoose');

const userSchema = Schema({
    username: { type: String, required: true },
    password: { type: String }
})

module.exports = model('User', userSchema);