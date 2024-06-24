import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import "dotenv/config"
import * as schema from "./schema"
// for query purposes
const queryClient = postgres(process.env.DATABASE_URL as string);
const db = drizzle(queryClient, { schema , logger: true});


export { db };