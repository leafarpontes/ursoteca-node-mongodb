const mongoose = require('mongoose');

const Livros = mongoose.model('livros', {
    nomeLivro: String,
    nomeAutor: String,
    generoLivro: String,
    editora: String,
    qtdPaginas: Number,
    valor: Number,
    codigoBarras: String,
});

module.exports = Livros;