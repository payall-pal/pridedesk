
import { Routes, Route } from 'react-router-dom'
import Contact from './components/Contact'
import ProjectDetails from './components/Projects/ProjectDetails'
import Files from './Files'
import GiveReview from './components/Reviews/GiveReview'
import ApplyCard from './components/Team/ApplyCard'
import Teamlead from './components/Team/Teamlead'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='overflow-hidden w-[99.1vw] bg-black'>

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
