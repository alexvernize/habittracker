import * as winston from "winston";

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    // new winston.transports.File({ filename: "combined.log" }),
  ],
});

export const logInfo = (message: string) => logger.info(message);

export const logError = (error: Error) => logger.error(error);
