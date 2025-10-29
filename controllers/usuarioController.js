const UsuarioModel = require('../models/usuarioModel');

const UsuarioController = {
    listar: async (req, res) => {
        try {
            const usuarios = await UsuarioModel.obtenerTodos();
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    crear: async (req, res) => {
        try {
            const nuevoUsuario = await UsuarioModel.crear(req.body);
            res.status(201).json(nuevoUsuario);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = UsuarioController;