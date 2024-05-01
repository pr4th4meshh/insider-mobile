import Artist from './components/Artists'
import Categories from './components/Categories'
import Featured from './components/Featured'
import Games from './components/Games'
import Genre from './components/Genre'
import Health from './components/Health'
import Magazine from './components/Magazine'
import Theatre from './components/Theatres'
import Workshop from './components/Workshop'
import Events from './components/Events'
import './globals.css'
import Newsletter from './components/Newsletter'
import Install from './components/Install'
import FooterHero from './components/FooterHero'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HeroCarousel from './components/HeroCarousel'
import BottomNavbar from './components/BottomNavbar'
import { Providers } from '@/provider'

export const metadata = {
  title: 'Insider_mobile',
  description: 'Mobile route of insider App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
        <Navbar/>
        <BottomNavbar/>
       {children}
        <FooterHero/>
        <Footer/>
        </Providers>
      </body>
    </html>
  )
}
