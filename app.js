var app = require('./config/server');

var server = app.listen(3002, function () {
    console.log("Server ONLINE");
});

var io = require('socket.io').listen(server);

//CONEXÃO POR WEBSOCKET
io.on('connection', function (socket) {
    console.log('Conectou');
    
    socket.on('disconnect', function () {
        console.log('Usuario desconectou');
    });
});