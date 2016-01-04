var express = require('express');
var app = express();

app.get('/status', function (req, res) {
  res.send('200 OK');
});

var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});