const express = require("express");
const app = express();
const { spawn } = require('child_process');
const cors = require('cors');
const bodyParser = require('body-parser')
const fs = require('fs')
const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://test.mosquitto.org')
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
  // const pyProg = spawn('python3', ['/home/pi/Gronska/schedule/script_turn_on_growing_light.py'], {cwd: '/home/pi/Gronska/schedule/'});
  // pyProg.stdout.on('data', function(data) {

  //     console.log(data.toString());
      // response.send({
      //   status: "success",
      //   message: data.toString()
      // });
  // });


        
  client.publish('gronska/engine/IKEA_SUB', '"GROW_LIGHT_ON"')
  response.send({
    status: "success",
    message: 'success'
  });


});

app.get("/turn_off", function(request, response) {
  response.setHeader("Content-Type", "application/json");
  response.header("Access-Control-Allow-Origin", "*");
  // const pyProg = spawn('python3', ['/home/pi/Gronska/schedule/script_turn_off_growing_light.py']);
  // pyProg.stdout.on('data', function(data) {
  //     console.log(data.toString());
  //     response.send({
  //       status: "success",
  //       message: data.toString()
  //     });
  // });

  client.publish('presence', 'Hello mqtt')
  client.publish('gronska/engine/IKEA_SUB', '"GROW_LIGHT_OFF"')
    response.send({
    status: "success",
    message: 'success'
  });


});

app.get("/open_lock", function(request, response) {
  response.setHeader("Content-Type", "application/json");
  response.header("Access-Control-Allow-Origin", "*");
  client.publish('gronska/engine/IKEA_SUB', '"DOOR_LOCK_1"')
    response.send({
    status: "success",
    message: 'success'
  });

});

app.get("/fan_on", function(request, response) {
  response.setHeader("Content-Type", "application/json");
  response.header("Access-Control-Allow-Origin", "*");
  client.publish('gronska/engine/IKEA_SUB', '"FAN_ON"')
    response.send({
    status: "success",
    message: 'success'
  });
});

app.get("/fan_off", function(request, response) {
  response.setHeader("Content-Type", "application/json");
  response.header("Access-Control-Allow-Origin", "*");
  client.publish('gronska/engine/IKEA_SUB', '"FAN_OFF"')
    response.send({
    status: "success",
    message: 'success'
  });
});

app.get("/water_on", function(request, response) {
  response.setHeader("Content-Type", "application/json");
  response.header("Access-Control-Allow-Origin", "*");
  client.publish('gronska/engine/IKEA_SUB', '"WATERING_ON"')
    response.send({
    status: "success",
    message: 'success'
  });
});

app.get('/water_off',function(request, response){

  client.publish('gronska/engine/IKEA_SUB', '"WATERING_OFF"')
    response.send({
    status: "success",
    message: 'success'
  });
});

// app.get('/reset',function(req,res){
//   let data = JSON.stringify({});
//   fs.writeFileSync('/home/pi/Gronska/schedule/configuration.json', data);
//   setTimeout(function(){ console.log("...... "); }, 1000);
//   const pyProg = spawn('python3', ['/home/pi/Gronska/schedule/schedule.py'], {cwd: "/home/pi/Gronska/schedule"});
//   pyProg.stdout.on('data', function(data) {
//       console.log(data.toString());
//       res.send({
//         status: "success",
//         message: data.toString()
//       });
//   });
// });


// app.get("/test_sensors", function(request, response) {
//   response.setHeader("Content-Type", "application/json");
//   response.header("Access-Control-Allow-Origin", "*");
//   const pyProg = spawn('python3', ['/home/pi/Gronska/schedule/test_sensors.py'],{cwd:'/home/pi/Gronska/schedule'});
//   pyProg.stdout.on('data', function(data) {
//       console.log(data.toString());
//       response.send({
//         status: "success",
//         message: data.toString()
//       });
//   });
// });


// app.get("/test_basement", function(request, response) {
//   response.setHeader("Content-Type", "application/json");
//   response.header("Access-Control-Allow-Origin", "*");
//   const pyProg = spawn('python3', ['/home/pi/Gronska/schedule/test_basement.py'],{cwd:'/home/pi/Gronska/schedule'});
//   pyProg.stdout.on('data', function(data) {
//       console.log(data.toString());
//       response.send({
//         status: "success",
//         message: data.toString()
//       });
//   });
// });


// app.get("/test_floors", function(request, response) {
//   response.setHeader("Content-Type", "application/json");
//   response.header("Access-Control-Allow-Origin", "*");
//   const pyProg = spawn('python3', ['/home/pi/Gronska/schedule/test_floors.py'],{cwd:'/home/pi/Gronska/schedule'});
//   pyProg.stdout.on('data', function(data) {
//       console.log(data.toString());
//       response.send({
//         status: "success",
//         message: data.toString()
//       });
//   });
// });


// app.get("/test_main_pump", function(request, response) {
//   response.setHeader("Content-Type", "application/json");
//   response.header("Access-Control-Allow-Origin", "*");
//   const pyProg = spawn('python3', ['/home/pi/Gronska/schedule/test_main_pump.py'],{cwd:'/home/pi/Gronska/schedule'});
//   pyProg.stdout.on('data', function(data) {
//       console.log(data.toString());
//       response.send({
//         status: "success",
//         message: data.toString()
//       });
//   });
// });


// app.get("/test_read_temperature", function(request, response) {
//   response.setHeader("Content-Type", "application/json");
//   response.header("Access-Control-Allow-Origin", "*");
//   const pyProg = spawn('python3', ['/home/pi/Gronska/schedule/test_read_temperature.py'],{cwd:'/home/pi/Gronska/schedule'});
//   pyProg.stdout.on('data', function(data) {
//       console.log(data.toString());
//       response.send({
//         status: "success",
//         message: data.toString()
//       });
//   });
// });


// app.get("/test_basement_door", function(request, response) {
//   response.setHeader("Content-Type", "application/json");
//   response.header("Access-Control-Allow-Origin", "*");
//   const pyProg = spawn('python3', ['/home/pi/Gronska/schedule/test_basement_door.py'],{cwd:'/home/pi/Gronska/schedule'});
//   pyProg.stdout.on('data', function(data) {
//       console.log(data.toString());
//       response.send({
//         status: "success",
//         message: data.toString()
//       });
//   });
// });

// app.get("/test_reset_boards", function(request, response) {
//   response.setHeader("Content-Type", "application/json");
//   response.header("Access-Control-Allow-Origin", "*");
//   const pyProg = spawn('python3', ['/home/pi/Gronska/test_reset_boards.py'],{cwd:'/home/pi/Gronska/schedule'});
//   pyProg.stdout.on('data', function(data) {
//       console.log(data.toString());
//       response.send({
//         status: "success",
//         message: data.toString()
//       });
//   });
// });

const listener = app.listen("8080", function() {
  console.log("Your app is listening on port " + listener.address().port);
});