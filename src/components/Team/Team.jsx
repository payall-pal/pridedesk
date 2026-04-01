import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import  { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Team = () => {




    gsap.registerPlugin(ScrollTrigger)
    const [active, setActive] = useState(false)
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)

    const teamRef = useRef(null)

    const mm = gsap.matchMedia()

    useGSAP(()=>{

        //desktop
        mm.add("(min-width:1024px)",()=>{
            gsap.from(teamRef.current,{
            opacity:0,
            duration:0.5,
            delay:0.3,
            scrollTrigger:{
                trigger: teamRef.current,
                start:"top 90%",
                end: "top 20%",
                scrub:3
            }
        })
        })

        //phone
        mm.add("(max-width:1023px)",()=>{
            gsap.from(teamRef.current,{
            opacity:0,
            duration:0.5,
            delay:0.3,
            scrollTrigger:{
                trigger: teamRef.current,
                start:"top 80%",
                end: "top 20%",
                scrub:3,
                amrkers: true
            }
        })

        })

        
        
    })

    

    return (
        <div className='lg:h-[50vw] h-[450vw] relative w-full   text-white/70 px-[6vw] py-[10vw] lg:p-[5vw]'>
            <div className='h-full w-full  rounded-xl  flex'>

                <div className='h-full lg:w-2/3 w-full  flex flex-col lg:justify-between  p-[2vw]'>

                    <h2 ref={teamRef} className='text-6xl  mt-[1vw] lg:leading-[4vw] leading-[17vw]'>The faces <span>behind <br />the projects.</span></h2>

                    <div className='flex lg:justify-start gap-0 lg:gap-[4vw] justify-between lg:flex-row flex-col lg:mt-0 mt-[165vw]  w-full  lg:items-center'>
                        <p className='lg:hidden block lg:w-[27vw] w-[45vw] lg:ml-0 ml-[19vw] mt-[40vw] lg:mt-0 lg:text-2xl text-[8vw] font-normal text  leading-[4.9vw] lg:leading-[1.6vw] text-white/50'>We believe great work comes from <span className='text-white'>Collabration, creativity </span>and <span className='text-2xl text-white'>commitment.</span></p>
                    
                        <div className='flex flex-col gap-4 lg:w-[20vw]  w-[45vw] lg:mt-0 mt-[40vw]'>
                            <h4 className='font-medium lg:text-[1.1vw] text-orange-700/80 text-2xl'>Be part of our mission</h4>
                            <h6 className='text-white/60'>If you're ready to create and <br /> collabration, we'd love to hear from you.</h6>
                            <Link to='./apply' className='bg-white/30 lg:text-lg text-[4vw] text-white/70 border-white border cursor-pointer active:scale-95 px-[2vw] lg:px-[7.5vw] py-[1vw] 
                            lg:py-[0.2vw] rounded-2xl lg:font-medium'>
                            Apply now</Link>
                        </div>
                        <p className='lg: block hidden lg:w-[27vw] w-[45vw] lg:ml-0 ml-[19vw] mt-0 lg:mt-0 lg:text-2xl text-[8vw] font-normal text  leading-[4.9vw] lg:leading-[1.6vw] text-white/50'>We believe great work comes from <span className='text-white'>Collabration, creativity </span>and <span className='text-2xl text-white'>commitment.</span></p>
                    </div>

                </div>

                <div className=' absolute lg:left-[66%] lg:top-[7%] left-0 top-[25%]  lg:h-full  h-[99vw] lg:w-1/3 w-full lg:mt-0 mt-[2vw] lg:p-[1vw]  p-[5vw] text-white  flex flex-col gap-2 '>
                    <div className='flex gap-2'>
                        
                        <div idx={0} onMouseEnter={()=>{setActive(true)}} onMouseLeave={()=>{setActive(false)}} className='relative leading-[0.9vw]'>
                            <h4 className={`transition-all ease-linear duration-300  absolute ${active ? "top-[10%] right-[10%]" : "lg:top-[40%] top-[37%] lg:left-[24%] left-[15%]"} text-white/70   font-medium text-[3vw] lg:text-[0.86vw]`}>Creative Director</h4>
                            <h4  className={`transition-all ease-linear duration-300 absolute ${active ? "bottom-[10%] left-[10%]" : "top-[48%] lg:left-[12%] left-[10%]"}  font-medium text-[3.2vw] lg:text-[1.2vw]`}>Priyanka Sherawat</h4>
                            <img className='lg:h-[17vw] lg:w-[12vw] h-[43vw] w-[43vw]  object-cover rounded-xl' src='https://images.unsplash.com/photo-1771199918875-58c95dbee206?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D' alt="" />
                        </div>
                        <div idx={1} onMouseEnter={()=>{setActive1(true)}} onMouseLeave={()=>{setActive1(false)}} className='relative'>
                            <h4 className={`absolute transition-all ease-linear duration-300  font-medium text-[3vw] lg:text-[0.86vw] ${active1 ? "top-[10%] right-[10%]" : "lg:top-[40%] top-[37%] lg:left-[24%] left-[15%]"}`}>Creative Director</h4>
                            <h4 className={`absolute  transition-all ease-linear duration-300   font-medium text-[3.2vw] lg:text-[1.2vw] ${active1 ? "bottom-[10%] left-[10%]" : "top-[48%] left-[20%]"}`}>Trisha Singh</h4>
                            <img className='lg:h-[17vw] lg:w-[12vw] h-[43vw] w-[43vw]   object-cover rounded-xl' src='https://images.unsplash.com/photo-1771757025861-8a3977ec136f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D' alt="" />
                        </div>

                    </div>
                    <div className='flex gap-2'>
                        <div idx={2} onMouseEnter={()=>{setActive2(true)}} onMouseLeave={()=>{setActive2(false)}} className='relative'>
                            <h4 className={`absolute right-3 top-3 transition-all ease-linear duration-300 font-medium text-[3vw] lg:text-[0.86vw] ${active2 ? "top-[10%] right-[10%]" : "lg:top-[40%] top-[37%] lg:left-[24%] left-[10%]"}`}>Creative Director</h4>
                            <h4 className={`absolute left-3 bottom-3 transition-all ease-linear duration-300 font-medium text-[3.2vw] lg:text-[1.2vw] ${active2 ? "bottom-[10%] left-[10%]" : "top-[48%] left-[20%]"}`}>Anjali Yadav</h4>
                            <img className='lg:h-[17vw] lg:w-[12vw] h-[43vw] w-[43vw]  object-cover rounded-xl' src='https://images.unsplash.com/photo-1771757019600-b33b2dc031ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D' alt="" />
                        </div>
                        <div idx={3} onMouseEnter={()=>{setActive3(true)}} onMouseLeave={()=>{setActive3(false)}} className='relative'>
                            <h4 className={`absolute right-3 top-3 transition-all ease-linear duration-300 font-medium text-[3vw] lg:text-[0.86vw] ${active3 ? "top-[10%] right-[10%]" : "lg:top-[40%] top-[37%] lg:left-[24%] left-[10%]"}`}>Creative Director</h4>
                            <h4 className={`absolute left-2 bottom-3 transition-all ease-linear duration-300 font-medium text-[3.2vw] lg:text-[1.2vw] ${active3 ? "bottom-[10%] left-[10%]" : "top-[48%] left-[10%] lg:left-[20%]"}`}>Harshita Rohalla</h4>
                            <img className='lg:h-[17vw] lg:w-[12vw] h-[43vw] w-[43vw]   object-cover rounded-xl' src='https://images.unsplash.com/photo-1770319675762-7f7e45fcdfd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D' alt="" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Team
