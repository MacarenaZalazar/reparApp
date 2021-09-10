require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes/index.js");
const { HOST_FRONT } = process.env;
const helmet = require("helmet");
const { createRoles, createjobTypes } = require("./libs/initialSetup");

const server = express();
createRoles();
createjobTypes();

server.name = "API";

server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(helmet());
server.use(morgan("dev"));
server.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
      "x-access-token",
    ],
  })
);

server.use("/", routes);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || "Ocurrio un error intentelo mas tarde";
  res.status(status).send({ message });
});

module.exports = server;
