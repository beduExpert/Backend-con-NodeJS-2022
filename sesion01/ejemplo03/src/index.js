const http = require('http'); // importación de módulo 'http' de la API de node

const hostname = '127.0.0.1'; // definición de una cadena para representar la IP
const port = 3000; // definición de un número para asginar el puerto

// uso del método createServer de http para obtener una instancia de 'Server'
const server = http.createServer((req, res) => {
  res.statusCode = 200; // OK http status code
  res.setHeader('Content-Type', 'text/plain'); // define el mime-type a responder
  res.end('Hello, World Beto 😎✌🏻!\n'); // agrega una cadena y cierra la llamada al mismo tiempo
});
// uso de la instancia server para ejecutar el servidor http
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});