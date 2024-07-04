import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import NextTopLoader from 'nextjs-toploader';
import SessionWrapper from '../components/SessionWrapper';
import { ThemeProvider } from '../components/theme-provider';
import { Toaster } from "@/src/components/ui/toaster"

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
      <SessionWrapper>
        <body className={inter.className}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
             <NextTopLoader />
           <Header />
          <div className='container mx-auto'>
            {children}
          </div>
          </ThemeProvider>
        </body>
      </SessionWrapper>
    </html>
  )
}
