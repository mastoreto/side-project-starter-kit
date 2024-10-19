import winston from 'winston';

const Logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  transports: [
    new winston.transports.File({ filename: 'log_files/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'log_files/combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  Logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}

export default Logger;
