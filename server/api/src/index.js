const express = require("express");
const app = express();
const { spawn } = require('child_process');

app.get("/", function(request, response) {
  response.send({ message: "Welcome to Gronska!" });
});

app.get("/turn_on", function(request, response) {
  response.setHeader("Content-Type", "application/json");
  response.header("Access-Control-Allow-Origin", "*");
  const pyProg = spawn('python3', ['/home/pi/Gronska/schedule/script_turn_on_growing_light.py']);
  pyProg.stdout.on('data', function(data) {

      console.log(data.toString());
      response.send({
        status: "success",
        email: "Growing light turned on"
      });
  });
});

app.get("/turn_off", function(request, response) {
  response.setHeader("Content-Type", "application/json");
  response.header("Access-Control-Allow-Origin", "*");
  const pyProg = spawn('python3', ['/home/pi/Gronska/schedule/script_turn_off_growing_light.py']);
  pyProg.stdout.on('data', function(data) {
      console.log(data.toString());
      response.send({
        status: "success",
        email: "Growing light turned off"
      });
  });
});

app.get("/water_cabins", function(request, response) {
  response.setHeader("Content-Type", "application/json");
  response.header("Access-Control-Allow-Origin", "*");
  const pyProg = spawn('python3', ['/home/pi/Gronska/schedule/script_watering.py']);
  pyProg.stdout.on('data', function(data) {
      console.log(data.toString());
      response.send({
        status: "success",
        email: "Cabins are watered"
      });
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
    message: "Show Setting"
  });
});

const listener = app.listen("8080", function() {
  console.log("Your app is listening on port " + listener.address().port);
});