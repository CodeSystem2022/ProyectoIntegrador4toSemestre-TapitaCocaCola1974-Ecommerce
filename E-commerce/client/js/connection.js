const { Pool } = require('pg');
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "usersdb",
  password: "admin",
  port: 5432, // Cambia esto si tu base de datos está en un puerto diferente
});

pool.connect((err, client, release) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err.stack);
    return;
  }
  console.log('Conexión exitosa al pool de PostgreSQL');

  // Ahora puedes realizar consultas con 'client.query(...)'

  // Liberar el cliente de vuelta al pool
  release();
});



module.exports = pool;





