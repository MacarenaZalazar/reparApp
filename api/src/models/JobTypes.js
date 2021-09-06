
const {Schema, model} = require('mongoose');

const TipoDeTrabajoSchema = new Schema({
    name: {
        type: [],
        require: [true, 'Es requerido el tipo de trabajo']
    }
});

module.exports = model('jobType', TipoDeTrabajoSchema);