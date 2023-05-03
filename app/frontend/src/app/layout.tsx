import { Inter } from 'next/font/google'
import { ReactNode } from 'react'


export const metadata = {
  title: 'DeliverApp',
  description: 'Create and manage deliveries',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
