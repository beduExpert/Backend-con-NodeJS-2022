"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
require("winston-daily-rotate-file");
exports.logger = winston_1.default.createLogger({
    level: 'debug',
    format: winston_1.default.format.combine(winston_1.default.format.label({ label: 'Graphql API' }), winston_1.default.format.timestamp({ format: 'YYYY-MM-DDTHH:mm:ss' }), winston_1.default.format.printf(({ label, timestamp, level, message }) => `[${label}] ${timestamp} | ${level} | ${message}`)),
    transports: [
        new winston_1.default.transports.DailyRotateFile({
            level: 'error',
            filename: './logs/error-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '30m',
            maxFiles: '15d'
        }),
        new winston_1.default.transports.DailyRotateFile({
            filename: './logs/combined-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '30m',
            maxFiles: '15d'
        }),
    ],
});
if (process.env.NODE_ENV !== 'production') {
    exports.logger.add(new winston_1.default.transports.Console({
        format: winston_1.default.format.simple(),
    }));
}
