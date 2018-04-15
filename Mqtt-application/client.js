var mqtt = require('mqtt')

client = mqtt.createClient(1883, 'localhost');
  var x= Math.random() * (120 - 0) + 0;
client.subscribe('temperature  '+ x);
//client.subscribe('temperature');

console.log('Client publishing.. ');
client = mqtt.createClient(1883, 'localhost');

client.on('message', function(topic, message) {
//publish function
client.publish('temperature '+ x);
});
client.end();

console.log('Client started...');
