var mqtt = require('mqtt')
var mosca = require('mosca')
const _ = require('lodash');

var settings = {
	port: 1883,
    persistence: mosca.persistence.Memory
	//: ascoltatore
};
var server = new mosca.Server(settings, function() {
  console.log('Mosca server is up and running')
});

server.on('published', function(packet, client,message) {
	console.log('Published', _.isBuffer(packet.payload)? packet.payload.toString(): packet.payload);

});
//server.on('ready', setup);
