"use client";
import { ModeToggle } from "@/src/components/mode-toggle";
import { Button } from "@/src/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react"

export function Header(){
    const { data: session } = useSession()
    return (
        <header>
             <div>
                {session?
                <> {session.user?.name}
                
                 <Button onClick={() => signOut()}>Sign out</Button>
                 </>
                :
                <Button onClick={() => signIn("github")}>Sign In</Button>
                }
                
              <ModeToggle />
            </div>
        </header>
    )
//     const { data: session } = useSession()
//   if(session) {
//     return <>
//       Signed in as {session.user?.email} <br/> 
//       Welcome {session.user?.name} <br/>
//       <button onClick={() => signOut()}>Sign out</button>
//     </>
//   }
//   return <>
//     Not signed in <br/>
//     <button onClick={() => signIn()}>Sign in</button>
//   </>
}