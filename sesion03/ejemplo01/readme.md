# Ejemplo 1

## Objetivo
Configurar babel para hacer desarrollo con `ES6+`

## Requerimientos
* `node LTS instalado`
* bash o emulador de comandos en windows
* `npm i dotenv`

## Desarrollo

* inicializar un proyecto `node`
* instalar [.env](https://www.npmjs.com/package/dotenv)
* configurarlo con la llamada a la siguiente línea lo más pronto posible del inicio de tu proyecto
```
require('dotenv').config()
```
* crear archivo `.env` en la raiz del proyecto (donde está el archivo `package.json`)
* poner una llave sin espacios y un valor
```
MY_OWN_KEY = 'valor de mi propia llave'
```
* imprimir la llave en el archivo `index.js`
```js
console.log(process.env.MY_OWN_KEY)
```
* agrega el script start al package.json
```json
"start": "node src/index.js"
```
* ejecuta el proyecto
```sh
npm start
```