import type { Metadata } from 'next'
import Image from 'next/image'
import "./globals.scss"
import Link from 'next/link'


export const metadata: Metadata = {
  title: 'Spiderverse',
  description: 'Criando um carrosel parallax do Aranhaverso com React, Next.js e Framer Motion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <header>
          <Image 
          src="/icons/menu.svg" 
          alt="Opções de menu" 
          width={36}
          height={25}
          />
          <Link href="/">
            <Image 
            src="/spider-logo.svg"
            alt='Spiderman logo'
            width={260}
            height={70}
            priority
            />
          </Link>
          
          <Image 
          src="/icons/user.svg"
          alt="Login"
          width={36}
          height={36}
          />
        </header>
        {children}
        </body>
    </html>
  )
}
