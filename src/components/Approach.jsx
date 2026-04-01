import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'


const Approach = () => {

    const approachRef = useRef([])
    const chartRef = useRef([])
    useGSAP(() => {
        gsap.to(approachRef.current, {
            backgroundColor: "black",
            color: "white",
            scrollTrigger: {
                trigger:approachRef.current,
                start: "top 50%",
                end: "top 10%",
                scrub: 3,
            }
        })
    })


    return (
       <div ref={approachRef} className='approach lg:h-[30vw] h-[150vw] rounded-2xl w-full text-black bg-white lg:px-[4vw] px-[7vw] lg:py-[3vw] py-[8vw] '>


            <div className=' pl-[1vw] lg:flex lg:flex-row flex flex-col'>

                <div className='lg:h-full lg:w-1/4 h-[10vw] w-full flex gap-2 lg:gap-3 '>
                    <div className='lg:h-[1vw] lg:w-[0.2vw] h-[4vw] w-[0.6vw] mt-[2vw] bg-orange-800 lg:mt-[0.5vw]'></div>
                    <h4 className='lg:text-[1.1vw] text-[5vw] font-medium'>pridedesk</h4>
                </div>


                <div className='h-full lg:w-3/4 w-full  lg:mt-[2vw] mt-[6vw]  '>
                    <h2 className='lg:w-[60vw] w-full lg:text-[1.9vw] lg:font-normal tracking-wide text-center text-[4.5vw] lg:text-end  leading-normal lg:mt-[3vw] mt-[35vw] '>
                        <span className='lg:block  hidden'>&nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; </span>
                        &nbsp; &nbsp;Our approach is simple:
                        <span className=''> we focus on functionality, speed, clarity, ensuring that every project serves a clear  purpose without un- necessary complexity.</span>
                    </h2>
                </div>

            </div>

        </div>
    )
}

export default Approach
