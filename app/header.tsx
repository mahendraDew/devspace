'use client'
import { ModeToggle } from '@/src/components/mode-toggle'
import { Button } from '@/src/components/ui/button'
import { useSession, signIn, signOut } from 'next-auth/react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { LogInIcon, LogOutIcon, User } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'

function AccountDropdown () {
  const { data: session } = useSession()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'outline'}>
          <Avatar className='mr-2'>
            <AvatarImage src={session?.user?.image ?? ''} />
            <AvatarFallback>
             <User />
            </AvatarFallback>
          </Avatar>

          {session?.user?.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {session ? (
          <>
            <DropdownMenuItem onClick={() => signOut()}>
              <LogOutIcon className='mr-2' /> SignOut
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem onClick={() => signIn('github')}>
              <LogInIcon className='mr-2' /> SignIn
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function Header () {
  const { data: session } = useSession()
  return (
    <header className='bg-gray-100 py-4 dark:bg-gray-900 '>
      <div className='container mx auto flex justify-between items-center'>
        <Link href="/" className='font-bold text-4xl text-neutral-800 dark:text-neutral-200' >_dev<span className='text-blue-600'>space</span></Link>
        <div className='flex items-center gap-4'>
          <AccountDropdown />

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
