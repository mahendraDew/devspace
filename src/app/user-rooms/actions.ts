'use server';

import { getSession } from "@/src/lib/auth";
import { deleteRoom, getRoom } from "@/src/services/space-session";
import { revalidatePath } from "next/cache";


export async function deleteRoomAction(roomId: string) {
    const session = await getSession(); 
    if(!session){
        throw new Error("User not authenticated");
    }    
    
   const room = await getRoom(roomId);
    if(room?.userId !== session.user.id){
        throw new Error("User not authorized");
    }
    await deleteRoom(roomId);

    revalidatePath('/user-rooms');
}