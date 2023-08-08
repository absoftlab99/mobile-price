import './globals.css'
import { Hind_Siliguri } from 'next/font/google'
import Header from '../components/Header/Header.jsx'
import Footer from '@/components/Footer/Footer'

const inter = Hind_Siliguri({ subsets: ['latin'], weight:['400'] })

export const metadata = {
  title: 'বাড়ির দোকান',
  description: 'আপনার প্রয়োজনীয় এক্সেসরিজ কেনার একমাত্র ভরসা',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Header></Header>
        </header>
        <div className='pb-5'>
        {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  )
}
