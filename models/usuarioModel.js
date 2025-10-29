const pool = require('../config/db');

const UsuarioModel = {
    obtenerTodos: async () => {
        const result = await pool.query('SELECT * FROM usuarios ORDER BY id');
        return result.rows;
    },
    crear: async (usuario) => {
        const { nombre, correo } = usuario;
        const result = await pool.query(
            'INSERT INTO usuarios (nombre, correo) VALUES ($1, $2) RETURNING *',
            [nombre, correo]
        );
        return result.rows[0];
    },
};

module.exports = UsuarioModel;