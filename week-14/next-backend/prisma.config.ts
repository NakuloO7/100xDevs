import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: "postgresql://neondb_owner:npg_t6OjvK8fFyJL@ep-cool-frog-adu0iwue-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
  },
});
