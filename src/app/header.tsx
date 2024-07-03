'use client'
import { useSession, signIn, signOut } from 'next-auth/react'
import { LogInIcon, LogOutIcon, User } from 'lucide-react'
import Link from 'next/link'
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Button } from '../components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { DropdownMenuContent, DropdownMenuItem } from '../components/ui/dropdown-menu'
import { ModeToggle } from '../components/mode-toggle'

function AccountDropdown () {
  const session = useSession()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'outline'}>
          <Avatar className='mr-2'>
            <AvatarImage src={session.data?.user?.image ?? ''} />
            <AvatarFallback>
             <User />
            </AvatarFallback>
          </Avatar>

          {session.data?.user?.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
            <DropdownMenuItem onClick={() => signOut({
              callbackUrl: "/",
            })}>
              <LogOutIcon className='mr-2' /> SignOut
            </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function Header () {
  const session = useSession();
  const isLoggedIn = !!session.data;
  return (
    <header className='bg-gray-500 bg-opacity-5 py-4  dark:bg-slate-900 dark:bg-opacity-40 z-10 relative'>
      <div className='container mx auto flex justify-between items-center'>
        <Link href="/" className='font-bold text-4xl text-neutral-800 dark:text-neutral-200' >_dev<span className='text-indigo-600'>space</span></Link>
        {isLoggedIn && (
          <div className='flex gap-8'>
            <Link className='hover:underline' href={"/browse"}>browse</Link>
            <Link className='hover:underline' href={"/user-rooms"}>my Rooms</Link>
          </div>
        )}
        <div className='flex items-center gap-4'>
          {isLoggedIn &&
          <AccountDropdown />}
          {!isLoggedIn &&
            <Button onClick={() => signIn("github")} variant='outline'>
              <LogInIcon className='mr-2' /> Sign In
            </Button>
          }
          <ModeToggle />
        </div>
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
