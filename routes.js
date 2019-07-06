const express = require('express');
const routes = express.Router();
const game = require('./game');


routes.use(express.static(__dirname));

routes.get('/',(req, res) =>{
  res.sendFile(__dirname + '/test.html');
});
routes.get('/jogo', (req, res) => {
  res.render('index', {dica: game.dica, symbol: game.symbol, senha: game.senha});
});
routes.get('/continuar', (req, res) => {
  res.sendFile(__dirname + '/continuar.html');
});

routes.post('/gabarito', (req, res) => {
  const { resposta } = req.body;
  if(resposta == game.senha) {
    res.sendFile(__dirname+'/continuar.html');
  } else {
    res.sendFile(__dirname+'/youlose.html');
  }
});

module.exports = routes;