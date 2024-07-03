import { db } from '@/src/db'
import { eq } from 'drizzle-orm';
import { users } from '../db/schema';

export async function deleteUser(userId:string) {
    await db.delete(users).where(eq(users.id, userId));
}