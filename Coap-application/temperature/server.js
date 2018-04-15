const coap  = require('../') // or coap
    , req   = coap.request('coap://localhost/')

req.on('response', function(res) {
  res.pipe(process.stdout)

})
req.end()
