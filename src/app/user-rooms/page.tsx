import Link from 'next/link'
import { getUserRooms } from '@/src/services/space-session'
import { UserSpaceCard } from './user-space-card';
import { unstable_noStore } from 'next/cache';
import { Button } from '@/src/components/button';
import Image from 'next/image';


export default async function UsersRoomPage () {
  unstable_noStore();
  const spaces = await getUserRooms();

  return (
    <main className=' min-h-screen justify-between p-24 container px-8 '>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-4xl'>my <span className='text-indigo-600 '> rooms</span></h1>
        <Button asChild>
          <Link href='/create-room'>create room</Link>
        </Button>
      </div>
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {spaces.map(space => {
          return <UserSpaceCard key={space.id} space={space} />
        })}
      </div>


      {spaces.length === 0 && (
          <div className='flex flex-col gap-4 justify-center items-center mt-24'>
            
            <Image src='/notfound.svg' width={200} height={200} alt='no data imgage'/>
            <h2 className='text-2xl'>You have No Rooms!!</h2>
            <Button asChild>
              <Link href='/create-room'>create room</Link>
            </Button>
          </div>
        )}
    </main>
  )
}
