const { Schema, model} = require('../connection');

const myschema = new Schema({
    name: String,
    email: String,
    password: String,
    address: String
});

module.exports = model('user',myschema);