CREATE TABLE compra(
    id SERIAL PRIMARY KEY,
    productName VARCHAR(255) NOT NULL,
    price VARCHAR(255) NOT NULL,
    quantity VARCHAR(255) NOT NULL,
    fecha_registro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP 

);