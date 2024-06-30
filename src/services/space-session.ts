import { db } from '@/src/db'
import { eq, like } from 'drizzle-orm';
import { unstable_noStore } from 'next/cache'
import { space } from '../db/schema';


export async function getSpaceSession(search: string | undefined){
    unstable_noStore();
    const where = search ? like(space.tags, `%${search}%`) : undefined;
    const spaces = await db.query.space.findMany({
        where,
    })
    return spaces
}

export async function getRoom(roomId: string){
    unstable_noStore();
    return await db.query.space.findFirst({
        where: eq(space.id, roomId)
    });
}