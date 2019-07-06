const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('views','./views');
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use(express.static('jogo'));
app.use(express.static(__dirname));

app.use(require('./routes'));


app.listen(8001);

