const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController');

router.get('/', UsuarioController.listar);
router.post('/', UsuarioController.crear);

module.exports = router;