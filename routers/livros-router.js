var express = require('express');
const router = express.Router();

const livrosController = require('../controllers/livros-controller');

// rota GET de listagem de livros para usuários admins
router.get('/livros-adm', livrosController.listar_livros_adm_get);

// rota GET de listagem de livros para usuários comuns
router.get('/livros', livrosController.listar_livros_comum_get);

// rota GET da página de cadastro de livros
router.get('/cadastrar-livro', livrosController.cadastrar_livro_get);

// rota POST da página de cadastro de livros
router.post('/cadastrar-livro', livrosController.cadastrar_livro_post);

// rota GET para deletar livro
router.get('/deletar-livro/:id', livrosController.deletar_livro_get);

// rota GET para editar livro
router.get('/editar-livro/:id', livrosController.editar_livro_get);

// rota POST para editar livro
router.post('/editar-livro', livrosController.editar_livro_post);

module.exports = router;