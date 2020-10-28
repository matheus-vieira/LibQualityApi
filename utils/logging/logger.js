import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const LOG_LEVEL = process.env.APP_LOG_LEVEL || 'info';

const transportList = [
  new DailyRotateFile({
    filename: `./.logs/${process.env.APP_ENV}/application-%DATE%.log`,
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    level: LOG_LEVEL,
  }),
  new winston.transports.File({
    filename: `./.logs/${process.env.APP_ENV}/${LOG_LEVEL}-%DATE%.log`,
    json: false,
    maxsize: 5242880,
    maxFiles: 5,
  }),
];

if (process.env.APP_ENV !== 'production') transportList.push(new winston.transports.Console());

const logger = winston.createLogger({
  level: LOG_LEVEL,
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    winston.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: transportList,
});

export default logger;
