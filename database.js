const mysql = require('mysql');

function conectarDB() {
    const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mqttprobando'
    });
    
    connection.connect((error) => {
    if (error) {
        console.error('Error de conexión:', error);
    } else {
        console.log('Conexión exitosa a la base de datos MySQL');
    }
    });
    
    return connection;
}
    
    module.exports = conectarDB;