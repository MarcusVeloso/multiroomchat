var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

// INCLUINDO MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
//INCLUI RECURSOS ESTÁTICOS
app.use(express.static('./app/public'))

// INCLUI O DIRETORIO DENTRO DO APP
consign()
    .include('app/routes')
    //INFORMA A EXTENSÃO PARA QUE SEJA SELECIONADO APENAS O ARQUIVO
    // .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;