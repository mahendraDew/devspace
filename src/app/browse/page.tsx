import Link from 'next/link'
import { getSpaceSession } from '@/src/services/space-session'
import { SearchBar } from './search-bar'
import { SpaceCard } from '@/src/app/browse/space-card'
import { unstable_noStore } from 'next/cache'
import { Button } from '../../components/button'
import Image from 'next/image'


export default async function Home ({searchParams}: {searchParams: {search: string}}) {
  unstable_noStore();
  const spaces = await getSpaceSession(searchParams.search);

  return (
    <main className=' min-h-screen justify-between p-24 px-10 md:px-8 container '>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-4xl'>find dev <span className='text-indigo-600 '> rooms</span></h1>
        <Button asChild>
          <Link href='/create-room'>create room</Link>
        </Button>
      </div>
      <div className="mb-12">
        <SearchBar />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {spaces.map(space => {
          return <SpaceCard key={space.id} space={space} />
        })}
      </div>

      {spaces.length === 0 && (
          <div className='flex flex-col gap-4 justify-center items-center mt-24'>
            <Image src='/notfound.svg' width={200} height={200} alt='no data imgage'/>
            <h2 className='text-2xl'>no rooms yet!!</h2>
            <Button asChild>
              <Link href='/create-room'>create room</Link>
            </Button>
          </div>
          
        )}
    </main>
  )
}
