const express = require("express");
const app = express();
const { spawn } = require('child_process');
var cors = require('cors');
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())
app.use(cors());

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
    setting : {
      "name": "module2",
      "id": "150538576906428",
      "EmergencyStop": true,
      "light_on": ["08:00"],
      "light_off": ["22:00"],
      "watering": ["09:00", "13:00", "17:00"],
      "is_active": true,
      "level_status": [true, true, true, true, true],
      "time_to_water": 3,
      "time_to_fill_irrigation_tank": 100,
      "min_water_level": 30,
      "ph_max": 5.8,
      "ph_min": 5.6,
      "ec_max": 2.0,
      "ec_min": 1.8,
      "additive_pump_time": 2,
      "additive_pump_max_loop": 3
    }

  });
});

app.post('/settings',function(req,res){
  var configuration = req.body;

  console.log("Configuration ", req);
  res.end("yes");
});

const listener = app.listen("8080", function() {
  console.log("Your app is listening on port " + listener.address().port);
});