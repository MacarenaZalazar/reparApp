const {Schema, model} = require('mongoose');

const tecnicosSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    phone: {
        type: String,
    },
    mail: {
        type: String,
        required: true
    },
    workZones: {
        type: [],
        required: true
    },
    jobTypes: {
        type: [],
        required: true
    },
    qualification: [],
    score: {
        type: Number,
        required: true
    }
}, {
    timestamps: true             // timestamps para que nos cargue fecha de ser creado y de actualizado si las hay
});

module.exports = model('UsersT', tecnicosSchema);    // el primer parametro sera asignado como nombre del modelo, y el segundo son los datos en si del modelo