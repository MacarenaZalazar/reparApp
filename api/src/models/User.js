const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true                  // timestamps para que nos cargue fecha de ser creado y de actualizado si las hay
});

module.exports = model('Users', userSchema);