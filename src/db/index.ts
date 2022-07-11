import path from "path";
import { Pool } from "pg";
import { migrate } from "postgres-migrations";

const poolConfig = {
  database: process.env.DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  max: Number(process.env.DB_POOL_SIZE),
  idleTimeoutMillis: Number(process.env.DB_POOL_CLIENT_IDLE_TIMEOUT),
  connectionTimeoutMillis: Number(
    process.env.DB_POOL_CLIENT_CONNECTION_TIMEOUT
  ),
};

const pg = new Pool(poolConfig);

const db = {
  runMigrations: async function (): Promise<void> {
    const client = await pg.connect();
    try {
      await migrate({ client }, path.resolve(__dirname, "migrations/sql"));
    } catch (e) {
      console.error("migration failed", e);
    } finally {
      client.release();
    }
  },
};

export default db;
