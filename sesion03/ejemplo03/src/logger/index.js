const winston = require('winston')

const logger = winston.createLogger({
   level: 'info',
   // format: winston.format.json(),
   // definición de un formato personalizado
   format: winston.format.combine(
      winston.format.label({ label: 'API tech' }), // podría ser el nombre del sistema
      winston.format.timestamp({ format: 'YYYY-MM-DDTHH:mm:ss' }),
      winston.format.printf(({ label, timestamp, level, message }) => `[${label}] ${timestamp} | ${level} | ${message}`)
   ),
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