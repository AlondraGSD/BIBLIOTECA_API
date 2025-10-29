const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/usuarios', require('./routes/usuarioRoutes'));
app.use('/api/libros', require('./routes/libroRoutes'));
app.use('/api/prestamos', require('./routes/prestamoRoutes'));

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});