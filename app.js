var express = require('express');
var mongoose = require('mongoose');

const app = express();
const port = 3000;

require('dotenv/config');

mongoose.connect(`${process.env.MONGO_DB_CONNECTION}`, {useNewUrlParser: true, useUnifiedTopology:true});

app.set('view engine', 'ejs');
app.set('views', __dirname, '/views');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
// faz com que a página /editarLivro (que não existe nos arquivos) consiga carregar arquivos da pasta public
app.use('/editar-livro', express.static('public'));

// teste página inicial
app.get('/', (req, res) => {
    res.send('Página inicial');
})

const livrosRouter = require('./routers/livros-router');
const usersRouter = require('./routers/users-router');
app.use('/', livrosRouter, usersRouter);

app.listen(port, () => {
    console.log(`servidor conectado na porta ${port}`);
});