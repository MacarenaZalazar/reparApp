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
    ban: {
      type: Boolean,
      default: false,
    },
    workImage: String,
    workType: {
      type: String,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    jobType: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("WorkOrder", workOrderSchema);
