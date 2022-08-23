// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");
const app = express();

const isAuthenticated = require("./authentication/authenMiddelWare.js");

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require("./config")(app);

// 👇 Start handling routes here
const index = require("./routes/index");
app.use("/", index);

app.get("/main",isAuthenticated, async(req, res, next) => {
  try {

    res.sendFile(
      '<img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3243&q=80>'
    );
  } catch (error) {
    next(error);
  }
});

app.get("/private", isAuthenticated, async(req, res, next) => {
  try {
    res.sendFile(
      '<img src="https://media.giphy.com/media/fxk8Qzygx6fhTIiUV7/giphy.gif">'
    );
  } catch (error) {
    next(error);
  }
});

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
