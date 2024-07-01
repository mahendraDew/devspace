import { db } from '@/src/db'
import { eq, like } from 'drizzle-orm';
import { unstable_noStore } from 'next/cache'
import { Space, space } from '../db/schema';
import { getSession } from '@/src/lib/auth';

//get rooms
export async function getSpaceSession(search: string | undefined){
    const where = search ? like(space.tags, `%${search}%`) : undefined;
    const spaces = await db.query.space.findMany({
        where,
    })
    return spaces
}

//get user rooms
export async function getUserRooms(){
    const session = await getSession();
    if(!session){
        throw new Error('User not authenticated');
    }
    const spaces = await db.query.space.findMany({
        where: eq(space.userId, session.user.id),
    });
    return spaces
}

//get room
export async function getRoom(roomId: string){
    return await db.query.space.findFirst({
        where: eq(space.id, roomId)
    });
}

//delete room
export async function deleteRoom(roomId: string){
    await db.delete(space).where(eq(space.id, roomId));
}

//create room
export async function createRoom(spaceData: Omit<Space, 'id' | 'userId'>, userId: string){
    await db.insert(space).values({...spaceData, userId});
}

//edit room
export async function editRoom(spaceData: Space){
    await db.update(space).set(spaceData).where(eq(space.id, spaceData.id));
}