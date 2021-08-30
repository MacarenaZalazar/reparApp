const {Schema, model} = require('mongoose');

const TipoDeTrabajoSchema = new Schema({
    name: {
        type: []
    }
});

module.exports = model('jobTypes', TipoDeTrabajoSchema);