const {Schema, model} = require('mongoose');
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    image: {
        type: String,        // todavia falta deducir como mandan la foto desde el front 
    },
    phone: {
        type: String,
    },
    mail: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        // unique: true
    },
}, {
    timestamps: true                  // timestamps para que nos cargue fecha de ser creado y de actualizado si las hay
});

// model('User', userSchema);

module.exports = model('User', userSchema);