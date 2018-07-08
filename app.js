var app = require('./config/server');

var server = app.listen(3002, function () {
    console.log("Server ONLINE");
});

var io = require('socket.io').listen(server);

//INCLUINDO VARIAVEL GLOBAL
app.set('io', io);

//CONEXÃO POR WEBSOCKET
io.on('connection', function (socket) {
    console.log('Conectou');

    socket.on('disconnect', function () {
        console.log('Usuario desconectou');
    });

    //MENSAGENS
    socket.on('msgParaServidor', function (data) {
        socket.emit(
            'msgParaCliente',
            { apelido: data.apelido, mensagem: data.mensagem })

        socket.broadcast.emit(
            'msgParaCliente',
            { apelido: data.apelido, mensagem: data.mensagem })

        //PARTICIPANTES
        console.log("data.apelido_atualizado_nos_clientes: " + data.apelido_atualizado_nos_clientes);

        if (parseInt(data.apelido_atualizado_nos_clientes) == 0) {
            socket.emit(
                'participantesParaCliente',
                { apelido: data.apelido }
            );

            socket.broadcast.emit(
                'participantesParaCliente',
                { apelido: data.apelido }
            );
        }
    });
});