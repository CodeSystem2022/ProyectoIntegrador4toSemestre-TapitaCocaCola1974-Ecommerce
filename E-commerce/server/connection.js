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

// Función para insertar el carrito en la base de datos
const insertarCarritoEnBD = async (cartDataArray) => {
  try {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');

      for (const cartItem of cartDataArray) {
        const result = await client.query('INSERT INTO purchased_items (data) VALUES ($1) RETURNING *', [cartItem]);
        console.log(`Data for ID ${result.rows[0].id} saved to the database`);
      }

      await client.query('COMMIT');
    } finally {
      client.release();
    }

    console.log('All data saved to the database');
  } catch (error) {
    throw error;
  }
};



module.exports = {
  pool,
  insertarCarritoEnBD,
};





