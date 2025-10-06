'use client'

import Header from '@/components/ui/header'
import { MinimalFooter } from '@/components/ui/footer'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <>
      <Header />
      
      <main className="grow">

        {children}

      </main>

      <MinimalFooter />
    </>
  )
}
