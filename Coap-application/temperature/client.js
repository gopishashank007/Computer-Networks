const coap    = require('../') // or coap
    , server  = coap.createServer()

server.on('request', function(req, res) {
var x= Math.random() * (120 - 0) + 0;
  res.end('the temperature is '+x + req.url.split('/')[1] + '\n')
})

server.listen(function() {
  console.log('client started')
})
