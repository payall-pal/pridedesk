import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'

import ServiceCard from './ServiceCard'
import ServiceCard2 from './ServiceCard2'

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const Services = () => {

    const [activeIndex, setActiveIndex] = useState(null)
    const [hover, setHover] = useState(false)

    const divRef = useRef()
    const buttonRef = useRef(false)

    const servicesData = [
        {
            title: "Branding",
            description: "We create brands that stand out and connect",
            skills: ["Brand Identity", "Brand strategy", "Visual strategy"]

        },
        {
            title: "App Development",
            description: "We build modern, fast and scalable websites.",
            skills: ["buildzz", "app", "technologies", "thinks"]


        },
        {
            title: "Branding",
            description: "We build modern, fast and scalable websites.",
            skills: ["brand", "front-end", "startup", "team"]


        },
        {
            title: "Content Creation",
            description: "We build modern, fast and scalable websites.",
            skills: ["cursor", "seo", "border"]


        }
    ]

    useGSAP(() => {
        gsap.from(divRef.current, {
            y: -20,
            duration: 1,
            delay: 0.5,
            opacity: 0,
            scrollTrigger: {
                trigger: ".trigger1",
                start: "top 55%",
                end: "top 10%",
                scrub: 3
            }

        })
    })



    return (
        <section className='trigger1 lg:w-full w-screen bg-gray-300 lg:h-[60vw] h-[170vw] text-black lg:py-[7vw] lg:p-10 p-[5vw] py-[9vw] relative '>
            <div className='lg:h-[10vw] lg:w-[93vw] w-[80vw]  px-[3vw] lg:px-0 flex gap-[3vw] lg:gap-2'>
                <div ref={divRef} className='h-full w-1/4  flex lg:gap-3 gap-2'>
                    <div className='lg:h-[1vw] lg:w-[0.2vw] h-[3vw] w-[0.6vw] mt-[0.17vw] bg-orange-800'></div>
                    <h4 className=' lg:text-lg text-[3vw] font-medium lg:font-semibold'>What we do</h4>
                </div>
                <h2 className='h-full w-3/4 lg:text-[6vw]  text-[11vw] lg:mr-[5vw] mr-[10vw] lg:mt-0 mt-[3vw]'>Services.</h2>
            </div>

            <div className='lg:block hidden'>
                <div className='flex flex-col gap-4 mt-[8vw] lg:mt-0'>
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={index} title={service.title} description={service.description} skills={service.skills} index={index} activeIndex={activeIndex} setActiveIndex={setActiveIndex}
                        />
                    ))}

                </div>

                <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={` transition-opacity duration-300  ${hover ? "bg-orange-600" : "bg-white/70"} 
                active:scale-95 lg:h-[2.4vw] h-[4.7vw] w-[18vw] lg:w-[9vw] font-medium flex items-center justify-between absolute  lg:py-[0.3vw] lg:px-[0.7vw] px-[1.4vw] rounded-4xl left-[28vw] lg:left-[25.7vw] mt-[3vw] lg:mt-[2vw]`}>
                    <Link to='/contact' className='cursor-pointer lg:text-lg text-[1.5vw] font-medium' href="#contact">Get started</Link>

                    <Link to='/contact'><div className='lg:h-[1.65vw] h-[2.6vw] w-[2.6vw] lg:w-[1.65vw] bg-black flex items-center justify-center text-[1.65vw] lg:text-lg text-white rounded-full'><i class="ri-arrow-right-up-line"></i></div>
                    </Link>
                </div>

            </div>

            <div className='lg:hidden relative block mt-[10vw]'>

                <Swiper modules={[Navigation, Pagination]} pagination={{ clickable: true }} navigation={{ prevEl: '.prev-btn', nextEl: '.next-btn', clickable: true }} slidesPerView={1} spaceBetween={10} loop={true} grabCursor={true} allowTouchMove={true} >
                    {servicesData.map((service, index) => (
                        <SwiperSlide key={index} className='w-full'>
                            <ServiceCard2
                                key={index} title={service.title} description={service.description} skills={service.skills} index={index}
                            />

                            <div className='absolute bottom-[2vw] left-[5vw] prev-btn h-[10vw] w-[10vw] text-[6vw] text-black/30 font-bold rounded-full  flex items-center justify-center'> <i class="ri-arrow-left-s-line"></i></div>
                            <div className='absolute bottom-[2vw] right-[5vw] next-btn h-[10vw] w-[10vw] text-[6vw] text-black/30 font-bold rounded-full  flex items-center justify-center'> <i class="ri-arrow-right-s-line"></i> </div>

                        </SwiperSlide>


                    ))}

                </Swiper>




            </div>

        </section>
    )
}

export default Services
