const pool = require('../config/db');

const PrestamoModel = {
    obtenerActivos: async () => {
        const result = await pool.query(
            'SELECT * FROM prestamos WHERE fecha_devolucion IS NULL'
        );
        return result.rows;
    },

    crear: async (prestamo) => {
        const { usuario_id, libro_id } = prestamo;
        const result = await pool.query(
            'INSERT INTO prestamos (usuario_id, libro_id, fecha_prestamo, fecha_devolucion) VALUES ($1, $2, CURRENT_DATE, NULL) RETURNING *',
            [usuario_id, libro_id]
        );
        return result.rows[0];
    },
};

module.exports = PrestamoModel;