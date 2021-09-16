const { Schema, model } = require("mongoose");
// const UserF = mongoose.model('UsersF');
const workOrderSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    userFinal: {
      type: Schema.ObjectId,
      ref: "UsersF",
    },
    userTech: {
      type: Schema.ObjectId,
      ref: "UsersT",
    },
    scoreFinal: {
      type: String,
    },
    scoreTech: {
      type: String,
    },
    ban: {
      type: Boolean,
      default: false,
    },
    workImage: { type: String },
    workType: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    reported: {
      type: Boolean,
      default: false,
    },
    state: {
      type: String,
      required: true,
    },
    zone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("WorkOrder", workOrderSchema);
