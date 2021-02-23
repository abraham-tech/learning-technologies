var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://test.mosquitto.org')

// client.on('connect', function () {
//   client.subscribe('presence', function (err) {
    // if (!err) {
      client.publish('presence', 'Hello mqtt')
      client.publish('gronska/engine/IKEA_SUB', '"GROW_LIGHT_OFF"')
    // }
//   })
// })

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})