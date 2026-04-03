import { useGSAP } from '@gsap/react'
import React, { useRef, useState } from 'react'
import gsap from 'gsap'

const About = () => {

    const aboutRef = useRef()
    const videoRef = useRef()

    const [ isPlaying , setIsPlaying ] = useState(false)

    function handleClick(){
        if (videoRef.current.paused){
            videoRef.current.play();
            setIsPlaying(true)
        }
        else{
            videoRef.current.pause()
            setIsPlaying(false)
        }
    }

    useGSAP(() => {
        gsap.from(aboutRef.current,{
            y:-8,
            duration:0.7,
            delay:0.3,
            opacity:0,
            scrollTrigger:{
                trigger: ".main",
                start: "top 50%",
                end: "top 30%,",
                scrub:3
            }
        })
    })


  return (
    <div className='main lg:h-[75vw] lg:w-screen h-[270vw] w-screen bg-black  lg:py-[3vw] '>
            <div className='lg:h-[15vw] lg:w-[93vw] mx-[7vw]  h-[65vw] w-full lg:mt-0 mt-[10vw] text-white/80 flex '>
                <div ref={aboutRef} className=' lg:h-full w-1/4 flex  gap-4'>
                    <div className='lg:h-[1vw] lg:w-[0.2vw] h-[4vw] w-[0.6vw] bg-orange-800 mt-[0.25vw]'></div>
                    <h4 className=' lg:text-lg lg:font-semibold text-[3vw]'>About us</h4>
                </div>


                <div className='lg:h-full w-3/4 flex flex-col gap-[0.5vw]  lg:mr-[5vw] lg:pt-0 pt-[8vw]'>
                    <h4 className='lg:text-xl lg:font-semibold lg:ml-[0.3vw] text-[9vw]'>Pridedesk</h4>

                    <h2 className='lg:text-[2.8vw] lg:font-medium text-[3.6vw] leading-none mt-[0.5vw]' >How we launch <span className='text-white/50'>websites<br />and marketing campaigns.</span></h2>
                    {/* <p className='text-[0.9vw] font-normal '>Lorem ipsum dolor sit amet consectetur, adipisicing  <br /></p> */}
                </div>

            </div>

            <div className='lg:h-[7vw] lg:w-full h-[115vw] w-full lg:flex lg:flex-row flex  flex-col  lg:mx-[3vw] mx-[7vw] lg:gap-0.5 gap-[8vw]'>
                <div className='lg:h-full lg:w-[23vw] h-[20vw]  w-full rounded-xl bg-black/20 text-white/80 py-[0.5vw] px-[1.5vw] flex flex-col gap-5'>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-0.5'>
                            <div className='lg:h-[0.5vw] lg:w-[0.5vw]  h-[1.4vw] w-[1.4vw] bg-white rounded-full mt-[0.44vw]'></div>
                            <div className='lg:h-[0.5vw] lg:w-[0.5vw]  h-[1.4vw] w-[1.4vw] bg-gray-400 rounded-full mt-[0.44vw]'></div>
                            <div className='lg:h-[0.5vw] lg:w-[0.5vw]  h-[1.4vw] w-[1.4vw] bg-gray-400 rounded-full mt-[0.44vw]'></div>
                            <div className='lg:h-[0.5vw] lg:w-[0.5vw]  h-[1.4vw] w-[1.4vw] bg-gray-400 rounded-full mt-[0.44vw]'></div>
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <img className='lg:h-[2.3vw] lg:w-[2.6vw] h-[15vw] w-[15vw] rounded object-cover' 
                       src='https://images.unsplash.com/photo-1771777400683-8614965bfce5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D' alt="" />
                        <h5 className='lg:text-[1vw] lg:font-medium text-[3.2vw]'>The team that communicates every step</h5>
                    </div>
                </div>

                <div className='lg:h-full lg:w-[23vw] h-[20vw]  w-full rounded-xl bg-black/20 text-white/80 py-[0.5vw] px-[1.5vw] flex flex-col gap-5'>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-0.5'>
                            <div className='lg:h-[0.5vw] lg:w-[0.5vw]  h-[1.4vw] w-[1.4vw] bg-white rounded-full mt-[0.44vw]'></div>
                            <div className='lg:h-[0.5vw] lg:w-[0.5vw]  h-[1.4vw] w-[1.4vw] bg-white rounded-full mt-[0.44vw]'></div>
                            <div className='lg:h-[0.5vw] lg:w-[0.5vw]  h-[1.4vw] w-[1.4vw] bg-gray-400 rounded-full mt-[0.44vw]'></div>
                            <div className='lg:h-[0.5vw] lg:w-[0.5vw]  h-[1.4vw] w-[1.4vw] bg-gray-400 rounded-full mt-[0.44vw]'></div>
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <img className='lg:h-[2.3vw] lg:w-[2.6vw] h-[15vw] w-[15vw] rounded object-cover' 
                       src='https://plus.unsplash.com/premium_photo-1749666992791-53362d6dc507?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8' alt="" />
                        <h5 className='lg:text-[1vw] lg:font-medium text-[3.2vw] '>Customized solution for your unique needs</h5>
                    </div>
                </div>

                <div className='lg:h-full lg:w-[23vw] h-[20vw]  w-full rounded-xl bg-black/20 text-white/80 py-[0.5vw] px-[1.5vw] flex flex-col gap-5'>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-0.5'>
                            <div className='lg:h-[0.5vw] lg:w-[0.5vw]  h-[1.4vw] w-[1.4vw] bg-white rounded-full mt-[0.44vw]'></div>
                            <div className='lg:h-[0.5vw] lg:w-[0.5vw]  h-[1.4vw] w-[1.4vw] bg-white rounded-full mt-[0.44vw]'></div>
                            <div className='lg:h-[0.5vw] lg:w-[0.5vw]  h-[1.4vw] w-[1.4vw] bg-white rounded-full mt-[0.44vw]'></div>
                            <div className='lg:h-[0.5vw] lg:w-[0.5vw]  h-[1.4vw] w-[1.4vw]  bg-gray-400 rounded-full mt-[0.44vw]'></div>
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <img className='lg:h-[2.3vw] lg:w-[2.6vw] h-[15vw] w-[15vw] rounded object-cover'
                        src='https://images.unsplash.com/photo-1771199918875-58c95dbee206?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D' alt="" />
                        <h5 className='lg:text-[1vw] lg:font-medium text-[3.2vw]'>transparent pricing with no hidden fees</h5>
                    </div>
                </div>

                <div className='lg:h-full lg:w-[23vw] h-[20vw]  w-full rounded-xl bg-black/20 text-white/80 py-[0.5vw] px-[1.5vw] flex flex-col gap-5'>
                    <div className='flex items-center justify-between '>
                        <div className='flex gap-0.5'>
                            <div className='lg:h-[0.5vw] lg:w-[0.5vw]  h-[1.4vw] w-[1.4vw] bg-white rounded-full mt-[0.44vw]'></div>
                            <div className='lg:h-[0.5vw] lg:w-[0.5vw]  h-[1.4vw] w-[1.4vw] bg-white rounded-full mt-[0.44vw]'></div>
                            <div className='lg:h-[0.5vw] lg:w-[0.5vw]  h-[1.4vw] w-[1.4vw] bg-white rounded-full mt-[0.44vw]'></div>
                            <div className='lg:h-[0.5vw] lg:w-[0.5vw]  h-[1.4vw] w-[1.4vw] bg-white rounded-full mt-[0.44vw]'></div>
                        </div>
                    </div>




                    <div className='flex gap-6'>
                        <img className='lg:h-[2.3vw] lg:w-[2.6vw] h-[15vw] w-[15vw] rounded object-cover'
                         src='https://images.unsplash.com/photo-1771340900977-d713d154f2ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D' alt="" />
                        <h5 className='lg:text-[1vw] lg:font-medium text-[3.2vw] '>Proven track record with measurable results</h5>
                    </div>
                </div>

            </div>

            <div className='lg:h-[40vw] lg:w-full h-[60vw]  w-full mt-[6vw] lg:mt-[4vw] rounded relative '>
                <div className=' absolute z-20 lg:left-[42vw] left-[36vw] lg:top-[18vw] top-[24vw] flex lg:gap-[0.6vw] gap-[2vw] items-center'>
                    <div onClick={handleClick} className={` lg:h-[3vw] lg:w-[3vw] h-[6.5vw] w-[6.5vw]  bg-black text-white/80 flex text-[2.8vw] lg:text-[1vw] items-center justify-center cursor-pointer rounded-full`}>
                     {isPlaying ? <i class="ri-pause-line"></i> : <i class="ri-play-large-fill"></i>}
                     </div>
                    <div>
                        
                    <h3 className='lg:text-xl text-[3vw] text-white font-medium '>Watch showreel</h3>
                    <h5 className='lg:block hidden text-white   lg:text-sm'>2006-235</h5>
                    </div>

                </div>
                
                <video  ref={videoRef}   muted loop  className='video scale-95 lg:h-[40vw] lg:w-full rounded-3xl object-cover' 
                src="https://www.pexels.com/download/video/5529079/"></video>
            </div>


        </div>
  )
}

export default About
