const { Schema, model } = require("mongoose");
// const User = mongoose.model('User');
const tecnicosSchema = new Schema(
  {
    user: {
      type: Schema.ObjectId,
      ref: "User",
    },
    workZones: {
      type: [],
      required: true,
    },
    jobTypes: {
      type: [],
      required: true,
    },
    qualification: [],
    price: {
      type: Number,
    },
    score: {
      type: Number,
    },
    totalScore: {
      type: [],
    },
  },
  {
    timestamps: true, // timestamps para que nos cargue fecha de ser creado y de actualizado si las hay
  }
);

module.exports = model("UsersT", tecnicosSchema); // el primer parametro sera asignado como nombre del modelo, y el segundo son los datos en si del modelo
