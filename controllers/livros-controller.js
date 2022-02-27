const Livros = require('../models/livros');

// renderiza a página de livros para um user admin
exports.listar_livros_adm_get = (req, res) => {
    let consulta = Livros.find({}, (err, livro) => {
        if (err) {
            return res.status(500).send('Erro ao consultar livro');
        }
        res.render('views/pages/livrosAdm', {listaLivros:livro});
    })
}

// renderiza a página de livros para um user comum
exports.listar_livros_comum_get = (req, res) => {
    let consulta = Livros.find({}, (err, livro) => {
        if (err) {
            return res.status(500).send('Erro ao consultar livro');
        }
        res.render('views/pages/livros', {listaLivros:livro});
    })
}

// renderiza a página de cadastro de livros
exports.cadastrar_livro_get = (req, res) => {
    res.render('views/pages/cadastrarLivro');
}

// método POST do cadastro de livros
exports.cadastrar_livro_post = (req, res) => {
    let livro = new Livros();

    livro.nomeLivro = req.body.nomeLivro;
    livro.nomeAutor = req.body.nomeAutor;
    livro.generoLivro = req.body.genero;
    livro.editora = req.body.editora;
    livro.qtdPaginas = req.body.qtdPag;
    livro.valor = req.body.valorLivro;
    livro.codigoBarras = req.body.codBarras;

    livro.save((err) => {
        if (err) {
            return res.status(500).send('Erro ao cadastrar');
        }
        return res.redirect('/livros-adm');
    })
}

// método de deletar livro
exports.deletar_livro_get = (req, res) => {
    var chave = req.params.id;

    Livros.deleteOne({_id:chave}, (err, result) => {
        if (err) {
            return res.status(500).send('Erro ao excluir livro.');
        }
    })
    res.redirect('/livros-adm');
}

// método GET da página de editar livro
exports.editar_livro_get = (req, res) => { 
    Livros.findById(req.params.id, (err, livro) => {
        if (err) {
            return res.status(500).send("Erro ao consultar livro.");
        }
        res.render('views/pages/editarLivro', {livro_item:livro});
    });
}

// método POST da página de editar livro
exports.editar_livro_post = (req, res) => {
    var id = req.body.id;

    Livros.findById(id, (err, livro) => {
        if (err) {
            return res.status(500).send("Erro ao consultar livro.");
        }
        livro.nomeLivro = req.body.nomeLivro;
        livro.nomeAutor = req.body.nomeAutor;
        livro.generoLivro = req.body.genero;
        livro.editora = req.body.editora;
        livro.qtdPaginas = req.body.qtdPag;
        livro.valor = req.body.valorLivro;
        livro.codigoBarras = req.body.codBarras;

        livro.save(err => {
            if (err) {
                return res.status(500).send("Erro ao editar livro.");
            }
            res.redirect('/livros-adm');
        })
    })
}