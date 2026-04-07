
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { projects } from '../Data/Data'
import ProjectCard from './ProjectCard'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'




const Projects = () => {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {

        const mm = gsap.matchMedia()

        //desktop
        mm.add("(min-width: 1024px)", () =>{

            //desktop

            gsap.from(".project-card", {
            x: 100,
            duration: 1,
            opacity: 0,
            stagger:0.3,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".project-card",
                start: "top 90%",
                end: "top 20%",
                scrub: 3,
                toggleActions: "play none none reverse",   
            }
        })
        })
        
        mm.add("(min-width: 1024px)", ()=>{
            gsap.from(".project-name", {
            x: 100,
            duration: 1,
            opacity: 0,
            stagger: 0.3,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".project-card",
                start: "top 90%",
                end: "top 20%",
                scrub: 3,
                toggleActions: "play none none reverse",
            }
        })
        })
        
        //phone
        
        mm.add("(max-width: 1023px)",() =>{

            gsap.from(".project-card", {
            x: 100,
            duration: 1,
            opacity: 0,
            stagger:0.4,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".project-card",
                start: "top 90%",
                end: "top -160%",
                scrub: 3,
                toggleActions: "play none none reverse",   
            }
        })
        })

         mm.add("(max-width: 1023px)", ()=>{
            gsap.from(".project-name", {
            x: 100,
            duration: 1,
            opacity: 0,
            stagger: 0.4,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".project-card",
                start: "top 90%",
                end: "top -160%",
                scrub: 3,
                toggleActions: "play none none reverse",
            }
        })
        })


    }, [])

  return (
     <div className='projects lg:h-[75vw] h-[530vw] bg-black text-white/80 w-screen  flex flex-col'>

            <div className='h-[15vw] w-full flex  lg:mx-[7vw] mx-[4vw]'>
                <h6 className='h-[15vw] w-[22vw] text-[1vw] text-white/50 font-medium'>01</h6>
                <div className='h-[15vw] w-[33vw] pt-6'> <h1 className='text-[6vw] text-white/90 '>Pro<span className='text-orange-800'>ject</span>s.</h1> </div>
                <p className='h-[15vw] lg:block hidden lg:w-[36vw] w-[50vw] text-start mt-[6vw] font-medium lg:ml-[7vw] lg:text-[1vw]  text-[2.9vw]'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  Here are some of our recent works <br />in branding, websites, and applications</p>
            </div>
            <p className='h-[15vw] lg:hidden block  w-full font-medium ml-[12vw]  text-[3vw]'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  Here are some of our recent works </p>
            

            <div className='h-[35vw] w-[92vw] flex flex-wrap lg:gap-[6vw]  mx-[5vw] px-[0.5vw] py-[2vw] '>
                {projects.map((project, index) => (
                    <Link key={project.id}  to={`/projectDetails/${project.id}`}><ProjectCard key={index} project={project} image={project.image} name={project.name} index={index} /></Link>
                ))}

            </div>

        </div>
  )
}

export default Projects
