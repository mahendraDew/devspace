'use client';
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";


export function TagsList({tags}: {tags: string[]}){
    const router = useRouter();
   return <div className="flex gap-2 flex-wrap">
    {tags.map((tag)=>(
        <button 
         className={cn(badgeVariants())} 
            key={tag}
            onClick={()=>{
            router.push(`/?search=${tag}`);
        }} >
            {tag}
        </button>
    ))}
</div>
}