// backend/src/config/env.ts
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "../../.env") });

interface EnvConfig {
  DB_USER: string;
  DB_PASSWORD: string;
  DB_HOST: string;
  DB_PORT: number;
  DB_NAME: string;
  PORT: number;
  NODE_ENV: "development" | "production" | "test";
  WHATSAPP_GROUP_LINK: string;
}

export const env: EnvConfig = {
  DB_USER: process.env.DB_USER || "postgres",
  DB_PASSWORD: process.env.DB_PASSWORD || "your_password",
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_PORT: parseInt(process.env.DB_PORT || "5432"),
  DB_NAME: process.env.DB_NAME || "sonko_campaign",
  PORT: parseInt(process.env.PORT || "5000"),
  NODE_ENV: (process.env.NODE_ENV as EnvConfig["NODE_ENV"]) || "development",
  WHATSAPP_GROUP_LINK:
    process.env.WHATSAPP_GROUP_LINK ||
    "https://chat.whatsapp.com/your-invite-code",
};
