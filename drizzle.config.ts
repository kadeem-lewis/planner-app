import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "app/drizzle/schema.server.ts",
  out: "app/drizzle/migrations",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
  driver: "pg",
  verbose: true,
  strict: true,
});
