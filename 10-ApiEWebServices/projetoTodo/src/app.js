const express = require("express");

const app = express();

//body parse 
app.use(express.json());
app.use(
  express.urlencoded({
      extended: true,
  })
);  

const indexRoute = require("./routers/index");
const todoRouter = require("./routers/todo")

app.use("/", indexRoute);
app.use("/todos", todoRouter);

 


module.exports = app;