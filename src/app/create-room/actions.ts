'use server';

import { Space } from "@/src/db/schema";
import { getSession } from "../../lib/auth";
import { revalidatePath } from "next/cache";
import { createRoom } from "@/src/services/space-session";

export async function createSpaceAction(spaceData: Omit<Space, "id" | "userId">) {
    const session = await getSession();
   
    if(!session){
        throw new Error("you must be logged in to create this space");
    }
    const room = await createRoom(spaceData, session.user.id);

    revalidatePath("/");
    return room;
}