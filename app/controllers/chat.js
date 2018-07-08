module.exports.iniciaChat = function (application, req, res) {

    var dadosForm = req.body;

    req.assert('apelido', 'Apelido deve ser informado!').notEmpty();
    req.assert('apelido', 'Apelido deve conter entre 3 e 15 caracteres!').len(5, 15);

    var erros = req.validationErrors();

    if (erros) {
        console.log(erros);
        res.render('index', { validacao: erros });
        return;
    }

    res.render('chat');
}