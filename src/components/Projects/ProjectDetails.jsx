
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { projects } from "../Data/Data"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"


const ProjectDetails = () => {
    
    gsap.registerPlugin(ScrollTrigger)
    
    const descriptionRef = useRef(null)
    const numRef = useRef(null)
    const nameRef = useRef(null)


    //ScrollToTop  ~ page bottom side pe khul rha tha
    useEffect(() => {
        window.scrollTo(0,0)
    },[])



    // Data Manipulation

    const { id } = useParams()

    const project = projects.find((p) => p.id === Number(id))

    if (!project) return( 
        <h1>Project not found</h1>
    )

    
    // Animation


    const tl = gsap.timeline()
    useGSAP(()=>{


        tl.from(numRef.current,{
            opacity:0,
            duration:0.3,
            delay:0.6
        })
        tl.from(nameRef.current,{
            opacity:0,
            duration:0.6,
            delay:0.4
        })
        tl.from(descriptionRef.current,{
            opacity:0,
            duration:0.6,
            delay:0.2
        })



    })

  return (
    <div className="min-h-screen w-screen text-white/70 relative p-[7vw]">
            <div className="absolute left-[4.5vw] top-[17.4vw] lg:top-[4.2vw] bg-red-800 h-[3vw] w-[0.6vw] lg:h-[0.8vw] lg:w-[0.16vw]"></div>
            <h2 ref={numRef} className="absolute lg:text-[1vw] text-[3.2vw] left-[11.6] lg:left-[5vw] top-[17vw] lg:top-[4vw]">Project {project.id}</h2>
            <h4 ref={nameRef} className="text-[7vw] lg:text-[2.4vw] mt-[27vw] lg:mt-[4vw]">{project.projectName}</h4>
            <p ref={descriptionRef} className="text-[3.2vw] lg:text-[1vw] text-white/60 lg:text-white/70 font-light mt-[11vw] w-[73vw] lg:w-[53vw] leading-[3.2vw] lg:leading-[1.4vw] lg:tracking-wide">{project.projectDescription}</p>
            
            
            <h4 className="lg:block hidden absolute top-[39%] lg:top-[27%] left-[50%] translate-x-[-50%] text-[8vw] lg:text-[7vw] tracking-widest opacity-50 lg:opacity-40">{project.bgname}</h4>
            <Link to={project.image}> 
            <img  className="lg:h-[42vw] lg:w-[72vw] h-[52vw] w-[80vw]translate-x-[-50%] object-cover object-center mt-[18vw] lg:mt-[12vw] opacity-80 relative left-[50%] rounded-xl" src={project.image} alt="" />
            </Link>
            
        </div>
  )
}

export default ProjectDetails
