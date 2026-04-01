import { useGSAP } from '@gsap/react'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'


gsap.registerPlugin(ScrollTrigger)
const Pricing = () => {

    

    const [active, setActive] = useState(false)
    const [hover, setHover] = useState(false)

    const isactive = active === true
    const isHover = hover === true
    
    function change() {
        setActive(isactive ? false : true)
    }
    
    // function changeOnHover(){
    //     setHover(isHover ? false :)
    // }


    const pricingRef = useRef(null)
    const textRef = useRef(null)

    useGSAP(() => {
        gsap.from(pricingRef.current, {
            y: -7,
            duration: 0.9,
            delay: 0.3,
            opacity: 0,
            scrollTrigger: {
                trigger: ".main6",
                start: "top 70%",
                end: "top 20%",
                scrub: 3
            }
        })
    })






    return (
        <div className='main6 lg:h-[60vw] h-[340vw] w-full relative  rounded-2xl px-[7vw] py-[10vw]'>
            <div className='lg:h-[15vw] w-full h-[36vw] text-white  flex lg:flex-row flex-col'>

                <div ref={pricingRef} className='lg:h-full lg:w-1/4 lg:items-start items-center flex gap-4'>
                    <div className='lg:h-[1vw] lg:w-[0.2vw] h-[3.4vw] w-[0.4vw] bg-orange-800 lg:mt-[0.23vw]'></div>
                    <h4 className=' lg:text-lg text-[3.4vw] font-semibold '>Simple. Transparent. Flexible</h4>
                </div>

                <div className='lg:h-full lg:w-3/4 flex mr-[5vw]'>
                    <h2 className='lg:text-[6vw] text-[15vw] lg:font-medium leading-none mt-[4vw]  lg:mt-[2.5vw]'>Pricing.</h2>
                </div>

            </div>

            <div className='lg:h-[19vw] h-[210vw] w-full text-white  flex lg:flex-row flex-col gap-1.5 '>

                <div className='lg:block hidden h-full w-[21vw] lg:bg-white/30 bg-black rounded flex flex-col justify-between p-[2vw]'>

                    <div className=''>
                        <h5 className='font-medium text-xl'>Want more traffic and leads?</h5>
                        <h6 className='text-gray-200 w-[11vw] font-medium mt-[1vw]'>Get marketing and SEO that starts with your goals.</h6>
                    </div>
                    <div className='flex gap-2 items-center mt-[7vw]'>
                        <div onClick={change} className={` transition-all ease duration-75 h-[1.8vw] w-[3vw] relative cursor-pointer rounded-3xl  flex items-center justify-start px-1 ${active ? "bg-white/40" : "bg-black"}`}>
                            <div className={`absolute transition-all ease duration-75 h-[1.28vw] w-[1.28vw] rounded-full bg-black left-1 ${active ? "opacity-100" : "opacity-0"}`}></div>
                            <div className={`absolute transition-all ease duration-75 h-[1.82vw] w-[1.82vw] rounded-full bg-white/40 z-10 right-0 top-[-0.02vw] ${active ? "opacity-0" : "opacity-100"} `}></div>
                        </div>
                        <h3 className='font-semibold text-xl'>+$1,490</h3>
                    </div>

                </div>

                
                <div className='lg:h-full lg:w-[57vw] h-[120vw] w-full lg:bg-white/30 bg-black rounded flex flex-col lg:gap-0 gap-2'>
                    <div className='h-1/2 w-full p-[3vw] py-[2vw]  flex lg:items-start lg:flex-row flex-col gap-[15vw] lg:gap-0 lg:justify-between '>

                        <div className='flex text-orange-800 items-end'>
                            <h2 className='text-4xl font-semibold'>$2,490</h2>
                            <h5 className='text-gray-200'>/project</h5>
                        </div>
                        
                        <div className=' font-medium leading-[10vw] lg:leading-[2vw] '>

                            <div className='flex items-center gap-2'>
                                <div className='lg:h-[0.36vw] lg:w-[0.36vw] h-[1.6vw] w-[1.6vw] rounded-full bg-white'></div>
                                <h4 className='tracking-wider '>Homepage + up to 4 inner pages</h4>
                            </div>

                            <div className='flex items-center gap-2'>
                                <div className='lg:h-[0.36vw] lg:w-[0.36vw] h-[1.6vw] w-[1.6vw] rounded-full bg-white'></div>
                                <h4>Design and Development</h4>
                            </div>

                            <div className='flex items-center gap-2'>
                                <div className='lg:h-[0.36vw] lg:w-[0.36vw] h-[1.6vw] w-[1.6vw] rounded-full bg-white'></div>
                                <h4>Mobile-Optimized Design</h4>
                            </div>

                        </div>

                    </div>


                    <div className='h-1/2 w-full p-[2vw] pt-[2vw]  flex lg:flex-row flex-col lg:items-end items-start justify-between'>
                        <div className='lg:border-b border-b-0 border-gray-200 flex lg:flex-row flex-col items-center justify-between gap-1 lg:pl-0 pl-[5vw] lg:mt-0 mt-[6vw]'>
                            <h5 className='text-gray-300 lg:text-[0.8vw] text-[3.2vw] font-medium tracking-wider'>Delivery time</h5>
                            <h5 className='font-medium lg:text-[1vw] text-[3.9vw] tracking-wider'>3-4 weeks</h5>
                        </div>


                        
                        
                        <Link to="/contact" onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} 
                        className={` text-center rounded-4xl py-2 px-[6vw] font-medium text-black lg:mb-0 mb-[4vw] ${ isHover ? "bg-white/40 scale-95" : "bg-white/80"}`} >Get in touch</Link>
                    </div>
                </div>

                <div className='block lg:hidden lg:h-full lg:w-[21vw] h-[90vw] w-full rounded flex flex-col justify-between p-[2vw]'>

                    <div className='lg:mt-0 mt-[4vw]'>
                        <h5 className='font-medium text-[12vw] lg:text-xl '>Want more traffic and leads?</h5>
                        <h6 className='text-gray-200 w-[11vw] mt-0  text-[5vw] font-medium lg:block hidden'>Get marketing and SEO that starts with your goals.</h6>
                    </div>
                    <div className='flex gap-2 items-center lg:mt-0 mt-[80vw]'>
                        <div onClick={change} className={` transition-all ease duration-75 lg:h-[1.8vw] lg:w-[3vw] h-[7.8vw] w-[14vw] relative cursor-pointer rounded-3xl  flex items-center justify-start px-1 ${active ? ["bg-white/40",] : "bg-white/30"}`}>
                            <div className={`absolute transition-all ease duration-75 lg:h-[1.28vw] lg:w-[1.28vw] h-[6.28vw] w-[6.28vw] rounded-full bg-black left-1 ${active ? "opacity-100" : "opacity-0"}`}></div>
                            <div className={`absolute transition-all ease duration-75  lg:h-[1.82vw] lg:w-[1.82vw] h-[8.6vw] w-[8.6vw] rounded-full bg-white/50 z-20 right-[-0.5vw] top-[-0.5vw] ${active ? "opacity-0" : "opacity-100"} `}></div>
                        </div>
                        <h3 className='font-semibold text-xl'>+$1,490</h3>
                    </div>

                </div>

            </div>

            <div className='main7 lg:h-[15vw] h-[72vw] w-[93vw]  text-white lg:flex-row flex-col flex px-[4vw] lg:mt-0 mt-[8vw] py-[5vw]'>

                <div className='h-full w-[30vw] lg:w-1/4'>
                    <a className=' text-lg font-medium text-gray-200 lg:block hidden' href="#services"> <h4 >Looking for more?</h4></a>
                </div>

                <div className='absolute h-[20vw] lg:h-full lg:w-3/4 w-[75vw]  lg:right-[-10vw] lg:bottom-[-48vw] bottom-[85vw] right-[3vw] flex flex-col gap-[0.5vw]   mr-[5vw]'>

                    <h5  className=' lg:text-[2vw] lg:mr-0 mr-[7vw] tracking-wide   text-[4.7vw] text-end leading-none mt-[0.5vw] text-white/80 lg:w-[45vw]'>
                    <span className=''>Add marketing, SEO or content creation, </span>
                    flexible tools  to strengthen your project. We'll shape a solution that fits your <span className='text-white'>business</span>, not ours</h5>

                    

                </div>

            </div>

        </div>
    )
}







export default Pricing
