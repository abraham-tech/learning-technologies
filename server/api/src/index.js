const express = require("express");
const app = express();
const { spawn } = require('child_process');
const cors = require('cors');
const bodyParser = require('body-parser')
const fs = require('fs')
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
  const pyProg = spawn('python3', ['/home/pi/Gronska/schedule/script_turn_on_growing_light.py'], {cwd: '/home/pi/Gronska/schedule/'});
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
  const pyProg = spawn('python3', ['/home/pi/Gronska/schedule/script_watering.py'],{cwd:'/home/pi/Gronska/schedule'});
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
  fs.readFile('/home/pi/Gronska/schedule/configuration.json', (err, data) => {
    if (err) throw err;
    let config = JSON.parse(data);
    response.send({config})
});
});

app.post('/settings',function(req,res){
  var configuration = req.body;

  let data = JSON.stringify(configuration);
  fs.writeFileSync('/home/pi/Gronska/schedule/configuration.json', data);
  res.end("yes");
});

app.get('/reset',function(req,res){
  let data = JSON.stringify({});
  fs.writeFileSync('/home/pi/Gronska/schedule/configuration.json', data);
  setTimeout(function(){ console.log("...... "); }, 1000);
  const pyProg = spawn('python3', ['/home/pi/Gronska/schedule/schedule.py'], {cwd: "/home/pi/Gronska/schedule"});
  pyProg.stdout.on('data', function(data) {
      console.log(data.toString());
      res.send({
        status: "success",
        message: "Growing light turned off"
      });
  });
});

const listener = app.listen("8080", function() {
  console.log("Your app is listening on port " + listener.address().port);
});