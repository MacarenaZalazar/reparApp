const Role = require("../models/roles");
// import User from "../models/User";
const JobTypes = require("../models/JobTypes");
// import bcrypt from "bcryptjs";
const User = require("../models/User");
const UserController = require("../controllers/Users");

const createRoles = async () => {
  try {
    // Count Documents
    const count = await Role.estimatedDocumentCount();

    // check for existing roles
    if (count > 0) return;

    // Create default Roles
    const values = await Promise.all([
      new Role({ name: "userFinal" }).save(),
      new Role({ name: "userTech" }).save(),
      new Role({ name: "admin" }).save(),
    ]);
  } catch (error) {
    console.error(error);
  }
};

const createjobTypes = async () => {
  try {
    // Count Documents
    const count = await JobTypes.estimatedDocumentCount();

    // check for existing Job types
    if (count > 0) return;

    // Create default Job types

    const array = ["Electricista", "Plomero", "Albañil", "Gasista"];
    const values = await JobTypes.create({ name: array });
  } catch (error) {
    console.error(error);
  }
};

const createAdmin = async () => {
  try {
    // check for an existing admin user
    const exist = await User.findOne({ mail: "admin@gmail.com" });

    // get roles _id
    const idRole = await Role.find({ name: { $in: "admin" } });

    const user = {
      name: "admin",
      lastName: "admin",
      mail: "admin@gmail.com",
      userName: "admin",
      password: "romanroman",
      state: "admin",
    };

    if (!exist) {
      // create a new admin user
      await UserController.createNewUser(user, idRole);
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = { createRoles, createjobTypes, createAdmin };
