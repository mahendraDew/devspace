"use client"
import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"

const SessionWrapper = ({children}: {children: React.ReactNode}) => {
    return (
        <SessionProvider>
                {children}
        </SessionProvider>
    )
}

export default SessionWrapper