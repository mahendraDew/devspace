import { db } from '@/src/db'
import { unstable_noStore } from 'next/cache'


export async function getSpaceSession(){
    unstable_noStore();
    const spaces = await db.query.space.findMany()
    return spaces
}