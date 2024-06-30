import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/src/components/theme-provider'
import SessionWrapper from './component/SessionWrapper'
import { Header } from './header'
import NextTopLoader from 'nextjs-toploader';

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
             <NextTopLoader />
           <Header />
          
            {children}
          </ThemeProvider>
        </body>
      </SessionWrapper>
    </html>
  )
}
