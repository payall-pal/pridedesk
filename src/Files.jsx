
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services'
import Approach from './components/Approach'
import Experiences from './components/Reviews/Experiences'
import Pricing from './components/Pricing'
import Team from './components/Team/Team'
import Faq from './components/FAQ/Faq'
import Contact from './components/Contact'


const Files = () => {
  return (
    <div>

      <section id="home">
        <Home />
      </section>

      <section id='projects'>
        <Projects />
      </section>


      <section id="services">
        <Services />
      </section>

      <section id='about'>
        <About />
      </section>

    <Approach />
    <Experiences />
    <Pricing />
    <Team />
    <Faq />
    <Contact />




    </div>

  )
}

export default Files

