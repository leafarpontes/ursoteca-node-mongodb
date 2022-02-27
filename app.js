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

// rotas de usuário/login

// rota get do login
// app.post('/login', (req, res) => {
//     let username = req.body.user;
//     let pw = req.body.pw;
//     let login;

//     // checa se usuário existe no BD
//     Users.findOne({userName: username, password: pw}, (err, user) => {
//         if (err) {
//             return res.status(500).send('Erro ao consultar usuário');
//         }
//         if (!user) {
//             console.log('login incorreto');
//             login = false;
//             console.log(login);
//             res.redirect('/login');
//         }
//         else {
//             login = true;
//             console.log(login);
//             // res.redirect('/livros');
//         }
//     })

//     Users.findOne({userName: username, password: pw, admin: true}, (err, user) => {
//         if (err) {
//             return res.status(500).send('Erro ao consultar usuário');
//         }
        
//         if (user) {
//             res.redirect('/livros');
//             console.log('usuario logado é admin');
//         }
//     })

//     Users.findOne({userName: username, password: pw, admin: false}, (err, user) => {
//         if (err) {
//             return res.status(500).send('Erro ao consultar usuário');
//         }

//         if (user) {
//             res.redirect('/livrosComum');
//             console.log('usuário logado é comum');
//         }
//     })

    // // checa se o usuário é admin
    // Users.findOne({userName: username, password: pw, admin: true}, (err, user) => {
    //     if (err) {
    //         return res.status(500).send('Erro ao consultar usuário');
    //     }
    //     if (login == true) {
    //         res.redirect('/livros');
    //     }
    //     else {
    //         res.redirect('/login');
    //     }
    // })

    // // checa se o usuário é comum
    // Users.findOne({userName: username, password: pw, admin: false}, (err, user) => {
    //     if (err) {
    //         res.status(500).send('Erro ao consultar usuário');
    //     }
    //     if (login == true) {
    //         res.redirect('/livrosComum');
    //     }
    //     else {
    //         res.redirect('/login');
    //     }
    // })
// })

app.listen(port, () => {
    console.log(`servidor conectado na porta ${port}`);
});