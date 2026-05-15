// backend/src/config/database.ts
import { Pool, PoolConfig } from "pg";
import dotenv from "dotenv";

dotenv.config();

const poolConfig: PoolConfig = {
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "your_password",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  database: process.env.DB_NAME || "sonko_campaign",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
};

export const pool = new Pool(poolConfig);

// Test database connection
export const testDatabaseConnection = async (): Promise<boolean> => {
  try {
    const client = await pool.connect();
    await client.query("SELECT NOW()");
    client.release();
    console.log("✅ Database connected successfully");
    return true;
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    return false;
  }
};

export default pool;
