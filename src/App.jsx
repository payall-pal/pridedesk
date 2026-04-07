
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



        // <Route path='/projectDetails/:id' element={<ProjectDetails />}/>
        // to={`/projectDetails/${project.id}`}
    //     const descriptionRef = useRef(null)
    // const numRef = useRef(null)
    // const nameRef = useRef(null)


    //ScrollToTop  ~ page bottom side pe khul rha tha
    // useEffect(() => {
    //     window.scrollTo(0,0)
    // },[])



    // Data Manipulation

    // const { id } = useParams()

    // const project = projects.find((p) => p.id === Number(id))

    // if (!project) return( 
    //     <h1>Project not found</h1>
    // )

    
    // // Animation