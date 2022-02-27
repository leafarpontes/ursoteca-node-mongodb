var express = require('express');
const router = express.Router();

const usersController = require('../controllers/users-controller');

// rota GET de cadastro de usuários
router.get('/cadastrar-usuario', usersController.cadastrar_usuario_get);

// rota POST de cadastro de usuários
router.post('/cadastrar-usuario', usersController.cadastrar_usuario_post);

// rota GET de login
router.get('/login', usersController.login_get);

// rota POST de login
router.post('/login', usersController.login_post);

module.exports = router;