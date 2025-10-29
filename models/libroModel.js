const pool = require('../config/db');

const LibroModel = {
    obtenerTodos: async () => {
        const result = await pool.query('SELECT * FROM libros ORDER BY id');
        return result.rows;
    },

    crear: async (libro) => {
        const { titulo, autor, isbn, año, categoria, copias_disponibles } = libro;
        const result = await pool.query(
            'INSERT INTO libros (titulo, autor, isbn, año, categoria, copias_disponibles) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [titulo, autor, isbn, año, categoria, copias_disponibles]
        );
        return result.rows[0];
    },
};

module.exports = LibroModel;