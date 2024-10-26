import './src/envConfig';
import { defineConfig } from 'drizzle-kit';

if (!process.env.DIRECT_DATABASE_URL) throw new Error('DIRECT_DATABASE_URL is not set');
export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DIRECT_DATABASE_URL, // use session mode; cause erroring out when using transaction mode.
  },
  casing: 'snake_case',
});