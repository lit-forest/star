var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

var server = app.listen(80, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://' + host + ':' + port);
});