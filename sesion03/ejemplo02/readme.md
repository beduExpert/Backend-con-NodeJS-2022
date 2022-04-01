# Ejemplo 2

## Objetivo

Configurar babel

## Requerimientos

* `npm i -D @babel/core @babel/node @babel/cli @babel/preset-env`

## Desarrollo

* Inicializar un proyecto `node`
* crear la carpeta `src` y el archivo `index.js`
* instalar `babel` con el siguiente comando `npm i @babel/core @babel/node`
* instalación del `preset` con `npm i @babel/preset-env` para evitar tener que elegir cada `feature` por nosotros mismos
* creación del archivo `babel.config.json`
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ]
}
```

* modifiquemos los scripts del proyecto para ejectutar babel antes de correr el código
```json
"build": "babel src -d dist"
```
> este comnado hace que se ejecute el compilador sobre la carpeta src y ponga su salida en una nueva carpeta llamada `dist`

* ejecuta la compilación y una vez que concluta, ejecuta el contenido de la carpeta `dist`
```sh
npm run build
node dist
```

* explora los archivos generados en `dist`

* para poder ejecutar en modo de desarrollo, podemos usar `nodemon` y `babel-node `sobre el archivo `index.js`
```json
"start": "npx nodemon --delay 500ms --exec babel-node src/index.js"
```
* para correr el proyecto, ejecuta el script `start` en la raiz del proyecto
```sh
npm run start
```
