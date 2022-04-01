# Ejemplo 3

## Objetivo

Configurar una herramienta para la escritura de archivos log

## Requerimientos

* `npm i winston`
* `npm i winston-daily-rotate-file`
* `npm i -D @babel/core @babel/node @babel/cli @babel/preset-env`

## Desarrollo

* genera el archivo `src/logger/index.js` con el siguiente contenido
```js
const winston = require('winston')

const logger = winston.createLogger({
   level: 'info',
   format: winston.format.json(),
   defaultMeta: { service: 'user-service' },
   transports: [
      // escribimos los logs de nivel `error` o menor en `error.log`
      new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
      // escribimos los logs de nivel `info` o menor en `combined.log`
      new winston.transports.File({ filename: 'logs/combined.log' }),
   ],
});

// si no estamos en producción, mostramos logs en la consola con el formato `simple`
if (process.env.NODE_ENV !== 'production') {
   logger.add(new winston.transports.Console({
      format: winston.format.simple(),
   }))
}

module.exports = { logger }
```

* haz una prueba del logger recién creado
`src/index.js`
```js
const { logger } = require('./logger')

logger.info('esta es una prueba con "info"')
logger.error('esta es una prueba con "error"')
```
> ¿qué notas en el formato de los logs?, ¿agregarías algo?

* vamos a crear nuestro propio formato cambiando `format: winston.format.json(),` por:

```js
format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DDTHH:mm:ss' }),
    winston.format.errors({ stack: true }),
    winston.format.printf(({ timestamp, level, message }) => `${timestamp} | ${level} | ${message}`)
),
```
