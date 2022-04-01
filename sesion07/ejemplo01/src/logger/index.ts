import { createLogger, format, transports } from 'winston'
import 'winston-daily-rotate-file'

export const logger = createLogger({
   level: 'debug',
   format: format.combine(
      format.label({ label: 'Graphql API' }),
      format.timestamp({ format: 'YYYY-MM-DDTHH:mm:ss' }),
      format.printf(({ label, timestamp, level, message }) => `[${label}] ${timestamp} | ${level} | ${message}`)
   ),
   transports: [
      new transports.DailyRotateFile({
         level: 'error',
         filename: './logs/error-%DATE%.log',
         datePattern: 'YYYY-MM-DD',
         zippedArchive: true,
         maxSize: '30m',
         maxFiles: '15d'
      }),
      new transports.DailyRotateFile({
         filename: './logs/combined-%DATE%.log',
         datePattern: 'YYYY-MM-DD',
         zippedArchive: true,
         maxSize: '30m',
         maxFiles: '15d'
      }),
   ],
});

if (process.env.NODE_ENV !== 'production') {
   logger.add(new transports.Console({
      format: format.simple(),
   }));
}
