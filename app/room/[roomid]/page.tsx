import { getRoom } from "@/src/services/space-session"
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge"
import { SplitTags, TagsList } from "@/src/components/tags-list";


export default async function roomPage(props:{params: {roomid: string}}) {
    const roomId = props.params.roomid
    const room = await getRoom(roomId);

    if(!room){
        return <div> ooppss!! no room of this ID found</div>
    }

    const tags = room.tags.split(",").map((tag) => tag.trim());

    return (
        <div className="grid grid-cols-4 min-h-screen">
          <div className="col-span-3 p-4 pr-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 min-h-screen">
              {/* <DevFinderVideo room={room} /> */}
            </div>
          </div>
    
          <div className="col-span-1 p-4 pl-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col gap-4">
              <h1 className="text-base">{room?.name}</h1>
    
             
    
              <p className="text-base text-gray-600">{room?.description}</p>

               
              <TagsList tags={SplitTags(room.tags)} />

              {room.githubRepo && (
                <Link
                  href={room.githubRepo}
                  className="flex items-center gap-2 text-center text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon />
                  Github URL 
                </Link>
              )}
            </div>
          </div>
        </div>
      );
}