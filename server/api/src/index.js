const express = require("express");
const app = express();

app.get("/", function(request, response) {
  response.send({ message: "Czytaj kod!" });
});

app.get("/turn_on", function(request, response) {
  response.setHeader("Content-Type", "application/json");
  response.header("Access-Control-Allow-Origin", "*");
  response.send({
    status: "sucess",
    email: "Growing light turned on"
  });
  const { spawn } = require('child_process');
  const pyProg = spawn('python', ['./../pypy.py']);

  pyProg.stdout.on('data', function(data) {

      console.log(data.toString());
      response.send({
        status: "sucess",
        email: "Growing light turned on"
      });
  });
});

app.get("/turn_off", function(request, response) {
  response.setHeader("Content-Type", "application/json");
  response.header("Access-Control-Allow-Origin", "*");
  response.send({
    status: "success",
    message: "Growing light turned off"
  });
});

app.get("/water_cabins", function(request, response) {
  response.setHeader("Content-Type", "application/json");
  response.header("Access-Control-Allow-Origin", "*");
  response.send({
    status: "success",
    message: "Watering cabin started"
  });
});

app.get("/open_door", function(request, response) {
  response.setHeader("Content-Type", "application/json");
  response.header("Access-Control-Allow-Origin", "*");
  response.send({
    status: "success",
    message: "Door opened"
  });
});

app.get("/close_door", function(request, response) {
  response.setHeader("Content-Type", "application/json");
  response.header("Access-Control-Allow-Origin", "*");
  response.send({
    status: "success",
    message: "Door opened"
  });
});

app.get("/setting", function(request, response) {
  response.setHeader("Content-Type", "application/json");
  response.header("Access-Control-Allow-Origin", "*");
  response.send({
    status: "success",
    message: "Door opened"
  });
});

const listener = app.listen("8080", function() {
  console.log("Your app is listening on port " + listener.address().port);
});
