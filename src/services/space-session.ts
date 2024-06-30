import { db } from '@/src/db'
import { eq } from 'drizzle-orm';
import { unstable_noStore } from 'next/cache'
import { space } from '../db/schema';


export async function getSpaceSession(){
    unstable_noStore();
    const spaces = await db.query.space.findMany()
    return spaces
}

export async function getRoom(roomId: string){
    unstable_noStore();
    const room = await db.query.space.findFirst({
        where: eq(space.id, roomId)
    });
    return room;
}