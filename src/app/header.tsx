'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import { LogInIcon, LogOutIcon, Trash2, User, UserX } from 'lucide-react'
import Link from 'next/link'
import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Button } from '../components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { DropdownMenuContent, DropdownMenuItem } from '../components/ui/dropdown-menu'
import { ModeToggle } from '../components/mode-toggle'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/src/components/ui/alert-dialog'
import { useEffect, useState } from 'react'
import { deleteAccountAction } from './deleteAccountActions'
import { Footer } from './footer'

function AccountDropdown () {
  const session = useSession();
  const [open, setOpen] = useState(false)

  return (
    <>
    <AlertDialog open={open} onOpenChange={setOpen}>
          
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete remove your account and all associated data.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={async () => {
                  await deleteAccountAction();
                  signOut({callbackUrl: '/'});
                }}
              >
                Delete My Account
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
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
            <DropdownMenuItem onClick={() => {
                  setOpen(true);
            }}>
              <UserX className='mr-2' /> Delete Account
            </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </>
  )
}




const MobileNav = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (open: boolean) => void
}) => {
    const session = useSession();
    const isLoggedIn = !!session.data;

    useEffect(() => {
      if (open) {
        document.body.classList.add('overflow-hidden'); // Add class to disable scroll
      } else {
        document.body.classList.remove('overflow-hidden'); // Remove class to enable scroll
      }
  
      return () => {
        document.body.classList.remove('overflow-hidden'); // Clean up on component unmount
      };
    }, [open]);

    
  return (
    <div
      className={`absolute top-0 left-0 h-screen max-h-screen w-screen overscroll-none bg-white dark:bg-neutral-950  transform ${
        open ? 'translate-x-0 ' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out filter drop-shadow-md`}
    >
      <div className='container flex items-center  filter drop-shadow-md bg-white dark:bg-neutral-950  h-20 '>
        {/* logo container */}
        <Link href="/" className=' text-3xl text-neutral-800 dark:text-neutral-200' >_dev<span className='text-indigo-600'>space</span></Link>
      </div>
      <div className='container flex flex-col items-center  h-[80vh]  gap-52 relative z-40 '>
            {isLoggedIn && (
            <div className='flex flex-col text-2xl justify-center items-center gap-28 mt-20 '>
                <Link className='hover:underline' href={"/browse"}>browse</Link>
                <Link className='hover:underline' href={"/user-rooms"}>my rooms</Link>
            </div>
            )}
            {!isLoggedIn && (
            <div className='flex flex-col text-2xl justify-center items-center gap-28 mt-20 '>
               
               <Link
                href='/browse'
                className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Get started
              </Link>
            </div>
            )}
           <div className='absolute bottom-5 flex justify-center '>

            <Footer />
           </div>
           
      </div>
    </div>
  )
}

export default function Header () {
    const session = useSession();
    const isLoggedIn = !!session.data;
  const [open, setOpen] = useState(false)

  return (
    <nav className='flex filter drop-shadow-md bg-white dark:bg-neutral-950 px-4 py-4 h-14 md:h-20 items-center relative z-50' >
      <MobileNav open={open} setOpen={setOpen} />
      <div className='container flex flex-row justify-center items-center'>

        <div className='w-3/12 flex items-center '>
            <Link href="/" className='text-3xl md:text-4xl text-neutral-800 dark:text-neutral-200' >_dev<span className='text-indigo-600'>space</span></Link>
        </div>
        <div className='w-9/12 flex justify-end items-center gap-6'>
            <div className='md:hidden  flex justify-center items-center gap-4'>
                {isLoggedIn &&
                    <AccountDropdown />}
                {!isLoggedIn &&
                    <Button onClick={() => signIn("github", { callbackUrl: '/browse' })} variant='outline'>
                    <LogInIcon  />
                    </Button>
                }
                <ModeToggle />
            </div>
            <div
            className='z-50 flex relative w-7 h-7 flex-col justify-between items-center md:hidden'
            onClick={() => setOpen(!open)}
            >
                
            {/* hamburger button */}
            <span
                className={`h-1 w-full bg-black dark:bg-white rounded-lg transform transition duration-300 ease-in-out ${
                open ? 'rotate-45 translate-y-3' : ''
                }`}
            />
            <span
                className={`h-1  bg-black dark:bg-white rounded-lg transition-all duration-300 ease-in-out ${
                open ? 'w-0 ' : 'w-full'
                }`}
            />
            <span
                className={`h-1 w-full bg-black dark:bg-white rounded-lg transform transition duration-300 ease-in-out ${
                open ? '-rotate-45 -translate-y-3' : ''
                }`}
            />
            </div>
            <div className='hidden md:flex mx auto gap-4 justify-between items-center'>
               
                {isLoggedIn && (
                <div className='flex gap-8'>
                    <Link className='hover:underline' href={"/browse"}>browse</Link>
                    <Link className='hover:underline' href={"/user-rooms"}>my rooms</Link>
                </div>
                )}
                <div className='flex items-center gap-4'>
                    {isLoggedIn &&
                    <AccountDropdown />}
                    {!isLoggedIn &&
                        <Button onClick={() => signIn("github", { callbackUrl: '/browse' })} variant='outline'>
                        <LogInIcon className='mr-2' /> Sign In
                        </Button>
                    }
                    <ModeToggle />
                </div>
            </div>
        </div>
      </div>
    </nav>
  )
}
