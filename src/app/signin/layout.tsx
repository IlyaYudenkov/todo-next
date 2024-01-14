import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TodoNext | SignIn',
  description: 'Generated by create next app',
}

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        {children}
    </div>
  )
}
