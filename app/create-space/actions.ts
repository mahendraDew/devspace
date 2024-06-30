'use server';

import { db } from "@/src/db";
import { Space, space } from "@/src/db/schema";
import { getSession } from "../../lib/auth";
import { revalidatePath } from "next/cache";

export async function createSpaceAction(spaceData: Omit<Space, "id" | "userId">) {
    const session = await getSession();
   
    if(!session){
        throw new Error("you must be logged in to create this space");
    }
    await db.insert(space).values({...spaceData, userId: session.user.id});

    revalidatePath("/");
}