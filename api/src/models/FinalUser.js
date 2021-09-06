const { Schema, model } = require("mongoose");
// var User = mongoose.model('User');
const UsuarioFinalSchema = new Schema(
  {
    user: {
      type: Schema.ObjectId,
      ref: "User",
      required: true
    },
    zone: {
      type: String,
      required: [true, 'La zona es requerida'],
    },
    score: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, // timestamps para que nos cargue fecha de ser creado y de actualizado si las hay
  }
);
module.exports = model("UsersF", UsuarioFinalSchema); // el primer parametro sera asignado como nombre del modelo, y el segundo son los datos en si del modelo
