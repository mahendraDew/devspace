import { getRoom } from "@/src/services/space-session"
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { DevspaceVideo } from "./video-player";
import { SplitTags } from "@/src/lib/utils";
import { unstable_noStore } from "next/cache";
import { TagsList } from "@/src/components/tags-list";
// import { space } from "@/src/db/schema";
 

export default async function roomPage(props:{params: {roomid: string}}) {
    unstable_noStore();
    const roomId = props.params.roomid
    const space = await getRoom(roomId);

    if(!space){
        return <div> ooppss!! no room of this ID found</div>
    }

    // const tags = space.tags.split(",").map((tag) => tag.trim());

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 min-h-screen container px-5">
          <div className="col-span-1 md:col-span-3 p-4 pr-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 min-h-screen">
              {/* <DevFinderVideo room={room} /> */}
               <DevspaceVideo space={space}/>
            </div>
          </div>
    
          <div className="col-span-1 p-4 pl-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col gap-4">
              <h1 className="text-base">{space?.name}</h1>
              <p className="text-base text-gray-600">{space?.description}</p>

              <TagsList tags={SplitTags(space.tags)} />

              {space.githubRepo && (
                <Link
                  href={space.githubRepo}
                  className="flex items-center gap-2 text-center text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon />
                  github URL 
                </Link>
              )}
            </div>
          </div>
        </div>
      );
}