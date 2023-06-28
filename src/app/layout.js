import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { Mulish } from 'next/font/google'

const mulish = Mulish({ 
  subsets: ['latin'],
  display : 'swap',
  weight : ['300','400','500','600','700','800','900'] 
})

export const metadata = {
  title: 'Movie App',
  description: 'Build using Rapid API~',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
         <Header/>
        {children}
         <Footer/>
        </body>
    </html>
  )
}
