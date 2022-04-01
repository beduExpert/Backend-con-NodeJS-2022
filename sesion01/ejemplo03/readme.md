# Ejemplo 3

## Objetivo

* Usar node como backend
* Arrancar un servidor http

## Requerimientos
* tener `node` instalado
* en VSCode, instalar la extensión `REST Client` de `Huachao Mao`

## Desarrollo

### Inicia un proyecto node
Estos son los pasos:
* crea una carpeta para el proyecto (en este caso se llama `ejemplo03`)
* posicionate en ese directorio desde la línea de comandos
* ejecuta el comando `npm init -y` para declarar tu intención de que esa carpeta sea la raiz de un proyecto node
* crea una carpeta `src` para poner el código del proyecto
* crea un archivo `index.js`
* modifica los `scripts` el archivo `package.json` agregando `"start": "node src/index.js"`
```sh
mkdir ejemplo03
cd ejemplo03
npm init -y
mkdir src
touch src/index.js
```
### Creando nuestro servidor http
* importamos el módulo 'http' de la API de node
```js
const http = require('http')
```
* definimos una cadena para representar la IP en el localhost
```js
const hostname = '127.0.0.1'
```
* definimos de un número a 4 dígitos para asginar el puerto
```js
const port = 3000
```
* usamos el método createServer de http para obtener una instancia de `Server`
```js
const server = http.createServer((req, res) => {
  res.statusCode = 200; // OK http status code
  res.setHeader('Content-Type', 'text/plain'); // define el mime-type a responder
  res.end('Hello, World Beto 😎✌🏻!\n'); // agrega una cadena y cierra la llamada al mismo tiempo
})
```
* usamos de la instancia server para ejecutar el servidor http
```js
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})
```

### Probando el servidor
* en la raiz del proyecto (donde está el archivo package.json) creamos una carpeta `client`
* dentro creamos un archivo `client.http` (más que el nombre, la extensión es la importante para que la extensión active los comandos)
* ecribimos la siguiente petición
```http
GET http://127.0.0.1:3000/ HTTP/1.1
```
* teniendo la extensión instalada, automáticamente aparece un link `Send Request` sobre la línea de la petición
* hacemos click sobre `Send Request`
