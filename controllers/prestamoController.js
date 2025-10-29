const PrestamoModel = require('../models/prestamoModel');

const PrestamoController = {
    listarActivos: async (req, res) => {
        try {
            const prestamos = await PrestamoModel.obtenerActivos();
            res.json(prestamos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    crear: async (req, res) => {
        try {
            const nuevoPrestamo = await PrestamoModel.crear(req.body);
            res.status(201).json(nuevoPrestamo);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = PrestamoController;