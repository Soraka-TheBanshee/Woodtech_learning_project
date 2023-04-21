import Header from '@/components/Header'
import './globals.css'
import { Raleway } from 'next/font/google';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const raleway = Raleway({
  subsets: ["latin", "cyrillic"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={raleway.className}>
      <body className=' bg-main-dark text-white font-[14px] leading-[24px] ' >
          <Header />
          {children}
      </body>
    </html>
  )
}
