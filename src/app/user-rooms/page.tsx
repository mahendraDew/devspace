import Link from 'next/link'
import { getUserRooms } from '@/src/services/space-session'
import { UserSpaceCard } from './user-space-card';
import { unstable_noStore } from 'next/cache';
import { Button } from '@/src/components/button';


export default async function UsersRoomPage () {
  unstable_noStore();
  const spaces = await getUserRooms();

  return (
    <main className=' min-h-screen justify-between p-24'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-4xl'>my <span className='text-indigo-600 font-semibold'> rooms</span></h1>
        <Button asChild>
          <Link href='/create-room'>create room</Link>
        </Button>
      </div>
      

      <div className="grid grid-cols-3 gap-4">
        {spaces.map(space => {
          return <UserSpaceCard key={space.id} space={space} />
        })}
      </div>
    </main>
  )
}
