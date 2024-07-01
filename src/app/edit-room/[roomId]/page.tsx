import { getRoom } from '@/src/services/space-session';
import { EditSpaceForm } from './edit-space-form';
import { unstable_noStore } from 'next/cache';

export default async function EditSpacePage({params}: {params: {roomId: string}}){
    unstable_noStore();
    const room = await getRoom(params.roomId);
    
    if(!room){
        return <div>Room not found</div>
    }
    return(
        <div className="container mx-auto flex flex-col gap-8 pt-12 pb-24">
            <h1 className="text-4xl font-bold">Edit Room</h1>
           
            <EditSpaceForm room={room}/>
        </div>
    )
    
}