import '../styles/global.css'

import { Inter } from 'next/font/google'

import { ReactNode } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Menu } from '@/components/Menu'
import { Explorer } from '@/components/Explorer'
import { OpenFilesProvider } from '@/hooks/useOpenFiles'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} h-screen`}>
      <head />
      <body>
        <div className="z-10 relative h-screen w-full flex justify-center">
          <div className="bg-[#232135] overflow-hidden w-full max-h-full shadow-md shadow-black/20 grid grid-rows-layout">
            <OpenFilesProvider>
              <Header />

              <div className="grid grid-cols-editor max-h-full">
                <Menu />
                <Explorer />

                <div className="h-full relative flex flex-col">
                  {/* <OpenFilesTabs /> */}
                  <div className="h-full relative">{children}</div>
                </div>
              </div>
            </OpenFilesProvider>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
