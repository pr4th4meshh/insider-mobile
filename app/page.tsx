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
import HeroCarousel from './components/HeroCarousel'
import Courses from './components/Courses'

export default function Home() {
  return (
    <main>
       <HeroCarousel/>
        {/* <Categories/> */}
        <Featured/>
        <Genre/>
        <Workshop/>
        <Courses/>
        <Theatre/>
        <Health/>
        <Games/>
        <Events/>
        <Magazine/>
        <Artist/>
        <Newsletter/>
        <Install/>
    </main>
  )
}
