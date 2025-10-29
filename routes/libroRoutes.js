const express = require('express');
const router = express.Router();
const LibroController = require('../controllers/libroController');

router.get('/', LibroController.listar);
router.post('/', LibroController.crear);

module.exports = router;
