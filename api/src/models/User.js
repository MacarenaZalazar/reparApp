const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    image: {
      type: String, // todavia falta deducir como mandan la foto desde el front
    },
    phone: {
      type: String,
    },
    mail: {
      type: String,
      required: true,
      unique: true,
    },
    ban: {
      type: Boolean,
      default: false,
    },
    promoted: {
      type: Boolean,
      default: false,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      // unique: true
    },
    state: {
      type: String,
      required: true,
    },
    reported: {
      type: Boolean,
      default: false,
    },
    roles: [
      {
        type: Schema.ObjectId,
        ref: "Role",
      },
    ],
  },
  {
    timestamps: true, // timestamps para que nos cargue fecha de ser creado y de actualizado si las hay
  }
);

// middlewares
userSchema.post("save", function (error, res, next) {
  if (error.name === "MongoServerError" && error.code === 11000) {
    next(new Error("Ya existe este usuario"));
  } else {
    next();
  }
});

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  if (password.length < 20) {
    return await bcrypt.compare(password, receivedPassword);
  }
  return true;
};

module.exports = model("User", userSchema);
