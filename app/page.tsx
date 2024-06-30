import { Button } from '@/components/ui/button'
import { db } from '@/src/db'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Space, sessions } from '@/src/db/schema'
import { GithubIcon } from 'lucide-react'
import { getSpaceSession } from '@/src/services/space-session'
import { SplitTags, TagsList } from '@/src/components/tags-list'
import { SearchBar } from './search-bar'


function SpaceCard ({space}: {space: Space}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{space.name}</CardTitle>
        <CardDescription>{space.description}</CardDescription>
        

      </CardHeader>
      <CardContent >
        <TagsList tags={SplitTags(space.tags)} />
        {space.githubRepo && <Link href={space.githubRepo} className='flex items-center gap-2 mt-4' target='_blank' rel='noopener noreferrer'><GithubIcon /> Github URL</Link>
        }
      </CardContent>
      <CardFooter>
          <Button asChild>
            <Link href={`/room/${space.id}`}>
              join room
            </Link>
          </Button>
      </CardFooter>
    </Card>
  )
}

export default async function Home ({searchParams}: {searchParams: {search: string}}) {
  const spaces = await getSpaceSession(searchParams.search);

  return (
    <main className=' min-h-screen justify-between p-24'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-4xl'>find dev <span className='text-blue-600 font-semibold'> rooms</span></h1>
        <Button asChild>
          <Link href='/create-space'>create room</Link>
        </Button>
      </div>
      <div className="mb-12">
        <SearchBar />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {spaces.map(space => {
          return <SpaceCard key={space.id} space={space} />
        })}
      </div>
    </main>
  )
}
