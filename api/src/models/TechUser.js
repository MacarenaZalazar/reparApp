const { Schema, model } = require("mongoose");
// const User = mongoose.model('User');
const tecnicosSchema = new Schema(
  {
    user: {
      type: Schema.ObjectId,
      ref: "User",
      required: true,
    },
    workZones: {
      type: [],
      required: [true, 'Las zonas de trabajo son requeridas'],
    },
    jobTypes: {
      type: [],
      required: [true, 'Los tipos de trabajo son requeridos'],
    },
    qualification: [],
    score: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true, // timestamps para que nos cargue fecha de ser creado y de actualizado si las hay
  }
);

module.exports = model("UsersT", tecnicosSchema); // el primer parametro sera asignado como nombre del modelo, y el segundo son los datos en si del modelo
