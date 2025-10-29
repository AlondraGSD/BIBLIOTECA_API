const express = require('express');
const router = express.Router();
const PrestamoController = require('../controllers/prestamoController');

router.get('/activos', PrestamoController.listarActivos);
router.post('/', PrestamoController.crear);

module.exports = router;