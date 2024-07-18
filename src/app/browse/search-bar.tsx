'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { useRouter, useSearchParams } from 'next/navigation'
import { SearchIcon } from 'lucide-react'
import { useEffect } from 'react'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../../components/ui/form'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'

const formSchema = z.object({
  search: z.string().min(0).max(50)
})

export function SearchBar () {
  const router = useRouter()
  const query = useSearchParams()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: query.get('search') ?? ''
    }
  })
  const search = query.get('search')
  useEffect(() => {
    form.setValue('search', search ?? '')
  }, [search, form])

  async function onSubmit (values: z.infer<typeof formSchema>) {
    if (values.search) {
      router.push(`/browse/?search=${values.search}`)
    } else {
      router.push('/browse')
    }
  }
  return (
    <div className=' flex flex-col md:block'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='flex gap-2 flex-col md:flex-row'>
          <FormField
            control={form.control}
            name='search'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder='Filter rooms by keywords like "react", "typescript", "nodejs" etc.'
                    className='w-full md:w-[440px] lg:w-[600px] '
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='flex flex-row-reverse md:flex-row '>
            <Button type='submit'>
              <SearchIcon className='mr-2' />
              Search
            </Button>

            {query.get('search') && (
              <Button
                onClick={() => {
                  form.setValue('search', '')
                  router.push('/browse')
                }}
                variant={'link'}
                className='underline md:no-underline'
              >
                Clear
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  )
}
