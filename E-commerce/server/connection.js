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
const insertarCarritoEnBD = async (cartData) => {
  try {
      const result = await pool.query('INSERT INTO carritos (cart_data) VALUES ($1) RETURNING *', [cartData]);
      return result.rows[0]; // Devuelve los datos insertados
  } catch (error) {
      throw error;
  }
};



module.exports = {
  pool,
  insertarCarritoEnBD,
};





