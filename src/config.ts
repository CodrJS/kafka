import { ServiceHealth } from "@codrjs/health";
import dotenv from "dotenv";
import { Kafka } from "kafkajs";
import { logCreator } from "./logger";
dotenv.config();

const clientId = process.env.KAFKA_CLIENT_ID as string;
const brokers = process.env.KAFKA_BROKERS as string;

const kafka = new Kafka({
  clientId,
  brokers: brokers.split(",").map(v => v.trim()),
  logCreator,
});

const kafkaAdmin = kafka.admin();
ServiceHealth.addAdmin(kafkaAdmin);

export const client = kafka;
export const admin = kafkaAdmin;
export default { client: kafka, admin };
