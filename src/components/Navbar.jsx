import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {



  // const [activee, setActivee] = useState(false)
  const [hover, setHover] = useState(false)
  const [hover1, setHover1] = useState(false)
  const [hover2, setHover2] = useState(false)
  const [hover3, setHover3] = useState(false)




  const navRef = useRef([])

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -7,
      duration: 0.6,
      delay: 3,
      opacity: 0
    })
  })


  
  const menuRef = useRef()
  const textRef = useRef([])

  const tl = gsap.timeline()

  useGSAP(()=>{
    tl.to(menuRef.current,{
      top:0,
      duration: 0.35,
    })

    tl.from(textRef.current,{
      y:-5,
      x: 10,
      opacity:0,
      duration:0.3,
      stagger:0.07,
    })

    tl.pause()
  })



  return (
    <div className='fixed z-40  w-full  flex items-center  text-white/80 justify-between lg:pb-[0.7vw] lg:pt-[2vw] pt-[7vw] lg:px-[3vw] px-[7vw]'>
      <h4 ref={el => navRef.current[0] = el} className='font-mono lg:text-[1.1vw] text-[3.7vw]'> PRIDEDESK</h4>
      <div className='lg:block hidden'>
        <div ref={el => navRef.current[1] = el} className='flex gap-[12vw]  mr-[3vw] lg:text-[0.95vw] '>

          <div className=' cursor-pointer active:scale-95'>
            <a href='/#home' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >Home</a>
            <div className={`transition-opacity  duration-300  h-[0.08vw] w-full bg-white/80 ${hover ? "opacity-100" : "opacity-0"}`}>
            </div>

          </div>

          <div className='active:scale-95'>
            <a href='/#about' onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)} >About</a>
            <div className={`transition-opacity duration-300  h-[0.08vw] w-full bg-white/80 ${hover1 ? "opacity-100" : "opacity-0"}`}>

            </div>
          </div>

          <div className='active:scale-95'>
            <a href='/#projects' onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)} >Projects</a>
            <div className={`transition-opacity duration-300  h-[0.08vw] w-full bg-white/80 ${hover2 ? "opacity-100" : "opacity-0"}`}>

            </div>
          </div>

          <div className='active:scale-95' >
            <Link to='/contact' onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)} >Contact</Link>
            <div className={`transition-opacity duration-300  h-[0.08vw] w-full bg-white/80 ${hover3 ? "opacity-100" : "opacity-0"}`}>

            </div>
          </div>




        </div>
      </div>

      <div onClick={() => { tl.play() }} ref={el => navRef.current[2] = el} className='lg:hidden block text-[4.3vw] cursor-pointer'><i class="ri-menu-3-line"></i></div>


      <div ref={menuRef} className=' absolute top-[-190vw] right-0 text-[2vw] text-white/70 font-medium h-[190vw] w-screen bg-orange-700/50 backdrop-blur-lg'>
        
        <div className='flex flex-col gap-[5vw] tracking-wide text-[5.65vw] font-medium items-center mt-[50%]'>
            <a onClick={() => { tl.reverse() }} ref={ el => textRef.current[0] = el} href="/#home">Home</a>
            <a onClick={() => { tl.reverse() }} ref={ el => textRef.current[1] = el} href="/#about">About</a>
            <a onClick={() => { tl.reverse() }} ref={ el => textRef.current[2] = el} href="/#project">Project</a>
            <a onClick={() => { tl.reverse() }} ref={ el => textRef.current[3] = el} href="/#contact">Contact</a>
          </div>
          <div onClick={() => { tl.reverse() }} className='absolute  top-[7%] right-[10%] text-[5.4vw] font-medium'> <i class="ri-close-line"></i></div>
        
      </div>







    </div>
  )
}

export default Navbar
