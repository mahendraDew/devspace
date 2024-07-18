import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import NextTopLoader from 'nextjs-toploader';
import SessionWrapper from '../components/SessionWrapper';
import { ThemeProvider } from '../components/theme-provider';
import { Toaster } from "@/src/components/ui/toaster"
import { Footer } from './footer';
import Header from './header';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'devspace',
  description: 'An application to help pair program with random devs online!!'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
       <head>
        <meta charSet="UTF-8" />
      </head>
      <SessionWrapper>
       <body className={`${inter.className} bg-gray-200 dark:bg-black`}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
             <NextTopLoader />
           <Header />
          <div className='mx-auto '>
            {children}
          </div>
            <Footer />
          </ThemeProvider>
        </body>
      </SessionWrapper>
    </html>
  )
}
