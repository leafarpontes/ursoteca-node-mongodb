const Users = require('../models/users');

// método GET da página de cadastro de usuário
exports.cadastrar_usuario_get = (req, res) => {
    res.render('views/pages/cadastrarUsuario');
}

// método POST da página de cadastro de usuário
exports.cadastrar_usuario_post = (req, res) => {
    let user = new Users();

    user.userName = req.body.user;
    user.password = req.body.pw;
    user.admin = req.body.admin;

    user.save((err) => {
        if (err) {
            return res.status(500).send('Erro ao logar');
        }
        return res.redirect('/login');
    })
}

// método GET da página de login de usuário
exports.login_get = (req, res) => {
    res.render('views/pages/login');
}

// método POST da página de login de usuário
exports.login_post = (req, res) => {
    let username = req.body.user;
    let pw = req.body.pw;
    let login;

    // checa se usuário existe no BD
    Users.findOne({userName: username, password: pw}, (err, user) => {
        if (err) {
            return res.status(500).send('Erro ao consultar usuário');
        }
        if (!user) {
            console.log('login incorreto');
            login = false;
            console.log(login);
            res.redirect('/login');
        }
        else {
            login = true;
            console.log(login);
        }
    })

    // checa se usuário é admin, se sim, redireciona para /livros-adm
    Users.findOne({userName: username, password: pw, admin: true}, (err, user) => {
        if (err) {
            return res.status(500).send('Erro ao consultar usuário');
        }
        
        if (user) {
            res.redirect('/livros-adm');
            console.log('usuario logado é admin');
        }
    })

    // checa se usuário é comum, se sim, redireciona para /livros
    Users.findOne({userName: username, password: pw, admin: false}, (err, user) => {
        if (err) {
            return res.status(500).send('Erro ao consultar usuário');
        }

        if (user) {
            res.redirect('/livros');
            console.log('usuário logado é comum');
        }
    })
}