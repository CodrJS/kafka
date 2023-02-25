/**
 * A customer Kafka to Codr log converter
 */
import { LogEntry, logLevel } from "kafkajs";
import Logger, { transports } from "@codrjs/logger";

const toWinstonLogLevel = (level: logLevel) => {
  switch (level) {
    case logLevel.ERROR:
    case logLevel.NOTHING:
      return "error";
    case logLevel.WARN:
      return "warn";
    case logLevel.INFO:
      return "info";
    case logLevel.DEBUG:
      return "debug";
  }
};

const logger = Logger.add("Kafka Client", [
  new transports.File({
    filename: "logs/kafka/all.log",
  }),
  new transports.File({
    filename: "logs/kafka/debug.log",
    level: "debug",
  }),
  new transports.File({
    filename: "logs/kafka/error.log",
    level: "error",
  }),
]);

const WinstonLogCreator = () => {
  return ({ namespace, level, label, log }: LogEntry) => {
    const { message, ...extra } = log;
    logger.log({
      level: toWinstonLogLevel(level),
      label,
      message: `[${namespace || "KafkaJS"}] ${message}`,
      ...extra,
    });
  };
};

export const logCreator = WinstonLogCreator;
