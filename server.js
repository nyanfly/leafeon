const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

const PORT = 3000;

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
      res.render('home');
});

app.listen(PORT, function () {
      console.log('listening on :' + PORT);
});
