import winston from 'winston'
import 'winston-daily-rotate-file'

export const logger = winston.createLogger({
   level: 'debug',
   format: winston.format.combine(
      winston.format.label({ label: 'Graphql API' }),
      winston.format.timestamp({ format: 'YYYY-MM-DDTHH:mm:ss' }),
      winston.format.printf(({ label, timestamp, level, message }) => `[${label}] ${timestamp} | ${level} | ${message}`)
   ),
   transports: [
      new winston.transports.DailyRotateFile({
         level: 'error',
         filename: './logs/error-%DATE%.log',
         datePattern: 'YYYY-MM-DD',
         zippedArchive: true,
         maxSize: '30m',
         maxFiles: '15d'
      }),
      new winston.transports.DailyRotateFile({
         filename: './logs/combined-%DATE%.log',
         datePattern: 'YYYY-MM-DD',
         zippedArchive: true,
         maxSize: '30m',
         maxFiles: '15d'
      }),
   ],
});

if (process.env.NODE_ENV !== 'production') {
   logger.add(new winston.transports.Console({
      format: winston.format.simple(),
   }));
}
