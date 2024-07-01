'use server'

import { getSession } from "@/src/lib/auth"
import { StreamChat } from "stream-chat"

export async function generateTokenAction(){
    const session = await getSession();
    if(!session){
        throw new Error('No Session found!!');
    }
    // Define values.
    const api_key = process.env.NEXT_PUBLIC_GET_STREAM_API_KEY!;
    const api_secret = process.env.GET_STREAM_SECRET_KEY!;

    // Initialize a Server Client
    const serverClient = StreamChat.getInstance( api_key, api_secret);
    // Create User Token
    const token = serverClient.createToken(session.user.id);
    return token;
} 