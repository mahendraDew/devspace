'use server';

import { redirect } from "next/navigation";
import { getSession } from "../lib/auth";
import { deleteUser } from "../services/users";

export async function deleteAccountAction() {
    const session = await getSession();
   
    if(!session){
        throw new Error("you must be logged in to delete your account");
    }

    await deleteUser(session.user.id);

}