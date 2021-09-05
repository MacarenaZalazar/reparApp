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
    workImage: String,
    workType: {
      type: String,
    },
    complete: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("WorkOrder", workOrderSchema);
