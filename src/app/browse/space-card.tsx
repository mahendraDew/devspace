'use client';
import Link from 'next/link'
import { Space } from '@/src/db/schema'
import { GithubIcon } from 'lucide-react'
import { SplitTags } from '@/src/lib/utils'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { TagsList } from '../../components/tags-list';
import { Button } from '../../components/ui/button';


export function SpaceCard ({space}: {space: Space}) {
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