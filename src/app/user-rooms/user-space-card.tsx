'use client'

import Link from 'next/link'
import { Space } from '@/src/db/schema'
import { GithubIcon, PencilIcon, Trash2 } from 'lucide-react'
import { SplitTags } from '@/src/lib/utils'
import { deleteRoomAction } from './actions'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/src/components/ui/alert-dialog'
import { TagsList } from '@/src/components/tags-list'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/src/components/ui/card'
import { Button } from '@/src/components/button'

export function UserSpaceCard ({ space }: { space: Space }) {
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{space.name}</CardTitle>
        <CardDescription>{space.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <TagsList tags={SplitTags(space.tags)} />
        {space.githubRepo && (
          <Link
            href={space.githubRepo}
            className='flex items-center gap-2 mt-4'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GithubIcon /> github URL
          </Link>
        )}
      </CardContent>
      <CardFooter className='flex gap-2'>
        <Button asChild>
          <Link href={`/room/${space.id}`}>join room</Link>
        </Button>
        <Button size='icon'>
          <Link href={`/edit-room/${space.id}`}>
            <PencilIcon />
          </Link>
        </Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant={'destructive'} size='icon'>
              <Trash2 />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the
                room and any data associated with it.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  deleteRoomAction(space.id)
                }}
              >
                Yes, Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  )
}
