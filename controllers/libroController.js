const LibroModel = require('../models/libroModel');

const LibroController = {
    listar: async (req, res) => {
        try {
            const libros = await LibroModel.obtenerTodos();
            res.json(libros);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    crear: async (req, res) => {
        try {
            const nuevoLibro = await LibroModel.crear(req.body);
            res.status(201).json(nuevoLibro);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = LibroController;