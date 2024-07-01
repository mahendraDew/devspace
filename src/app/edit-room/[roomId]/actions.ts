'use server';

import { Space } from "@/src/db/schema";
import { getSession } from "@/src/lib/auth";
import { editRoom, getRoom } from "@/src/services/space-session";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function EditSpaceAction(spaceData: Omit<Space,"userId">) {
    const session = await getSession();
   
    if(!session){
        throw new Error("you must be logged in to create this space");
    }
    const room = await getRoom(spaceData.id);
    if(room?.userId !== session.user.id){
        throw new Error("User not authorized");
    }
    await editRoom({...spaceData, userId: room.userId});

    revalidatePath("/user-rooms");
    revalidatePath(`/edit-room/${spaceData.id}`);
    redirect("/user-rooms");
}