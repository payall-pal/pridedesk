import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const Loader = (props) => {


    const stairParentRef = useRef(null)
    const pageRef = useRef(null)
    useGSAP(() => {



        const tl = gsap.timeline()

        tl.to(stairParentRef.current,{
            display: "block"
        })

        tl.from(".stair",{
            height:0,
            duration:0.3

        })

        tl.from(".loader", {
            y: -20,
            stagger:{
                amount:0.3
            },
            opacity:0,
            delay: 0.1
        })

        tl.to(".stair",{
            y:'-100%',
            duration: 1,
            delay: 0.2

        })

        tl.to(stairParentRef.current,{
            display: "none"
        })

        

        gsap.from(pageRef.current,{
        opacity:0,
        delay:1
        })
        
    }, {scope: stairParentRef.current})

    return (
        <div className='bg-black'>
            <div ref={stairParentRef} className='fixed z-20 stair h-screen w-screen flex gap-2 items-center justify-center text-white  bg-black'>

            <div className=' h-full w-full items-center justify-center gap-2 flex'>
                <div className='loader h-[3vw] w-[1vw] text-xl font-medium lg:font-semibold flex items-center justify-center '> P </div>
                <div className='loader h-[3vw] w-[1vw] text-xl font-medium lg:font-semibold flex items-center justify-center '> R </div>
                <div className='loader h-[3vw] w-[1vw] text-xl font-medium lg:font-semibold flex items-center justify-center '> I </div>
                <div className='loader h-[3vw] w-[1vw] text-xl font-medium lg:font-semibold flex items-center justify-center '> D </div>
                <div className='loader h-[3vw] w-[1vw] text-xl font-medium lg:font-semibold flex items-center justify-center '> E </div>

                <div className='loader h-[3vw] w-[1vw] text-xl font-medium lg:font-semibold flex items-center justify-center '> D </div>
                <div className='loader h-[3vw] w-[1vw] text-xl font-medium lg:font-semibold flex items-center justify-center '> E </div>
                <div className='loader h-[3vw] w-[1vw] text-xl font-medium lg:font-semibold flex items-center justify-center '> S </div>
                <div className='loader h-[3vw] w-[1vw] text-xl font-medium lg:font-semibold flex items-center justify-center '> K </div>
            </div>

            </div>
            <div ref={pageRef}>{props.children}</div>
        </div>
        
    )
}

export default Loader
