import { useGSAP } from '@gsap/react'
import { useRef, useState } from 'react'
import gsap from 'gsap'

const Teamlead = () => {

  const leadRef = useRef([])
  const [hover, setHover] = useState(false)
  const isactive = hover === true

  useGSAP(()=>{
    gsap.from(leadRef.current,{
      y:-20,
      delay:0.4,
      opacity:0,
      stagger:{
        amount:0.4
      }
    })
  })

  return (
    <div  className='h-screen w-full relative text-white bg-black pt-[13vw] px-[5vw] flex gap-8'>
      <img ref={el=> leadRef.current[0] = el} className='h-[30vw] w-[30vw] object-cover rounded-2xl' src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwcGhvdG98ZW58MHx8MHx8fDA%3D" alt="" />
      <div className=' px-[5vw] leading-tight'>
        <h1 ref={el=> leadRef.current[1] = el} className='text-[4.2vw] tracking-wide mt-[2vw]'>Nitish Pal</h1>
        <h4 ref={el=> leadRef.current[2] = el} className='text-[1.7vw] tracking-wide text-orange-800'>Team Leader</h4>
        <h4 ref={el=> leadRef.current[3] = el} className='text-[1.4vw] mt-[3vw] tracking-wide'>&nbsp; &nbsp; &nbsp; &nbsp; Guides the team through each project and keeps<br /> everything on track. Works closely with clients to make <br /> sure their goals are clearly delivered</h4>
        <button onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} className={`mt-[4vw] text-xl ${isactive? "bg-white/40":"bg-white/80 "} font-medium cursor-pointer active:scale-95 text-black px-[1vw] py-[0.4vw] pb-[0.6vw] rounded-3xl`}>Request Callback</button>
      </div>

      
    </div>
  )
}

export default Teamlead
