'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { createSpaceAction } from './actions'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  name: z.string().min(1).max(50),
  description: z.string().min(1).max(250),
  tags: z.string().min(1).max(50),
  githubRepo: z.string().min(1).max(50)
})

export function CreateSpaceForm () {
  const router = useRouter()

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      tags: '',
      githubRepo: ''
    }
  })
  // 2. Define a submit handler.
  async function onSubmit (values: z.infer<typeof formSchema>) {
    await createSpaceAction(values)
    router.push('/')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder='devspace - a pair programming platform'
                />
              </FormControl>
              <FormDescription>This is your public Space name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="I'm working on a side project called devspace where you can find fellow developers to pair program with, come join me!"
                />
              </FormControl>
              <FormDescription>
                Please describe what you"ll be working on.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='tags'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Programming Language</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder='javascript, typescript, reactjs, nextjs, tailwindCSS'
                />
              </FormControl>
              <FormDescription>
                List your programming languages, frameworks, libraries so people
                can find your room
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='githubRepo'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Github Repo</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder='https://github.com/mahendradew/<project-name>'
                />
              </FormControl>
              <FormDescription>
                Please put a line to the project you are be working on.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  )
}
