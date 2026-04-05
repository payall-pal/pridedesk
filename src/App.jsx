
import { Routes, Route } from 'react-router-dom'
import { useEffect} from 'react'
import Contact from './components/Contact'
import ProjectDetails from './components/Projects/ProjectDetails'
import Files from './Files'
import GiveReview from './components/Reviews/GiveReview'
import ApplyCard from './components/Team/ApplyCard'
import Teamlead from './components/Team/Teamlead'
import Navbar from './components/Navbar'
import Lenis from '@studio-freight/lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

const App = () => {
  // useEffect(()=>{
  //     const lenis = new Lenis({
  //       smooth: true
  //     })
  //     lenis.on("scroll",
  //       ScrollTrigger.update
  //     )
  //     gsap.ticker.add((time)=>{
  //       lenis.raf(time * 1000)
  //     })
      
  //     gsap.ticker.lagSmoothing(0)
      
  // }, [])



  return (
    <div className='apppage overflow-hidden w-[99.1vw] bg-black'>

    <Navbar />
    <Routes>
        <Route path='/' element={<Files />} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/projectDetails/:id' element={<ProjectDetails />}/>
        <Route path='/givereview' element={<GiveReview />}/>
        <Route path='/apply' element={<ApplyCard />}/>
        <Route path='/teamlead' element={<Teamlead />} />
        
      </Routes>



    </div>
  )
}

export default App
