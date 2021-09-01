
const {Schema, model} = require('mongoose');

const TipoDeTrabajoSchema = new Schema({
    name: {
        type: []
    }
});

// model('jobType', TipoDeTrabajoSchema);

module.exports = model('jobType', TipoDeTrabajoSchema);