import { useGSAP } from '@gsap/react'
import { useRef, useState } from 'react'
import gsap from 'gsap'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import 'swiper/css'
import Testimonials from './Testimonials'
import { Link } from 'react-router-dom'

const Experiences = () => {

    
    const expRef = useRef(null)
    const textRef = useRef([])
    const [hover, setHover] = useState(false)

    const reviewsData = [
        {
            image: "https://plus.unsplash.com/premium_photo-1771650827599-33e046949bad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
            name: "Emly Devis",
            profession: "England hub",
            review: "Incredible team! They delivered exactly what we needed, on time and beyond expectations"
        },
        {
            image: "https://images.unsplash.com/photo-1770721478216-3e5dbbe8dcc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
            name: "Anjali shrewat",
            profession: "accountar",
            review: "A smooth process from start to finish. Highly professional team!"
        },
        {
            image: "https://images.unsplash.com/photo-1772107756927-a3975482b1ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
            name: "Vansh Sharma",
            profession: "Business Owner",
            review: "Our new branding is exactly what we envisioned - clean, modern, and unique. #1 in our industry."
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1771650827599-33e046949bad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
            name: "Emly Devis",
            profession: "England hub",
            review: "Incredible team! They delivered exactly what we needed, on time and beyond expectations"
        },
        {
            image: "https://images.unsplash.com/photo-1770721478216-3e5dbbe8dcc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
            name: "Anjali shrewat",
            profession: "accountar",
            review: "A smooth process from start to finish. Highly professional team!"
        },

    ]


    useGSAP(() => {
        gsap.from(".main2", {
            y: -7,
            duration: 0.9,
            delay: 0.3,
            opacity: 0,
            scrollTrigger: {
                trigger: ".main2",
                start: "top 50%",
                end: "top 20%",
                scrub: 3
            }
        })
    })

    useGSAP(() => {
        gsap.from(".main3", {
            x: -7,
            duration: 0.9,
            delay: 0.3,
            opacity: 0,
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".main3",
                start: "top 50%",
                end: "top 20%",
                scrub: 3
            }
        })
    })






  return (
    <div  className=' lg:h-[50vw] min-h-screen   w-full   text-white lg:px-[7vw] px-[7vw] pt-[7vw] pb-[14vw] lg:py-[3vw]'>
            
            
            <div className='lg:h-[15vw] h-[26vw] w-full lg:w-[93vw]  lg:flex-row flex flex-col'>
                <div ref={expRef} className='main2 lg:h-full lg:w-1/4 flex  lg:gap-4 gap-2'>
                    <div className='lg:h-[1vw] lg:w-[0.2vw] h-[5vw] w-[0.5vw] bg-orange-800 mt-0 lg:mt-[0.23vw]'></div>
                    <h4 className='lg:text-lg text-[3.4vw] font-semibold '>Testimonials</h4>
                </div>


                <div className='h-full w-3/4 flex flex-col lg:gap-[0.5vw] leading-[0.3vw] lg:text-start text-end lg:mt-0 mt-[7vw]  lg:mr-[5vw]'>
                    <h4 className=' lg:text-xl text-[3vw] font-semibold ml-[0.3vw]'>that matters</h4>
                    <h2 ref={el => textRef.current[0] = el} className='main3 lg:text-[6vw] text-[13vw] font-medium  text-orange-800/80 leading-none lg:mt-[0.5vw]'>Experiences</h2>
                </div>

            </div>

            <div className=' h-[27vw]  w-full  flex  gap-2  mt-[1.4vw]'>


                <div className='lg:block hidden lg:h-full lg:w-1/4 h-[120vw] w-full  flex flex-col lg:gap-1 rounded-lg gap-[4vw]'>
                    <div className='lg:h-[17vw] h-[30vw] w-full  text-white/50  rounded-xl flex items-start justify-between lg:gap-[1vw] gap-[8vw] p-[1.5vw]'>
                        <div className='flex items-end'>
                            <h4 className='lg:text-4xl text-[6vw] font-semibold'>4.9</h4>
                            <h6 className='text-semibold lg:text-sm text-[3vw]'>/5</h6>
                        </div>
                        <p className='lg:w-[12vw] font-medium  text-lg'>rating we got for<span className='text-white'> service & collabration</span> from our valuable Clients. </p>
                    </div>


                    <div onMouseMove={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} className={` transition-all  ease duration-75 lg:h-[10vw] h-[80vw] w-full
                           ${hover ? "bg-white/40" : "bg-white/30"} cursor-pointer rounded-xl relative flex flex-col
                          lg:gap-2 gap-[12vw] lg:pt-[1vw] pt-[12vw] px-[4vw] lg:px-[2vw]`}>
                        <h4 className='font-medium lg:text-lg'>Pridedesk</h4>

                        <div className='flex items-end'>
                            <div className='flex'>
                                <div className=' lg:h-[2vw] lg:w-[2vw] h-[10vw] w-[10vw] rounded-xl bg-black '></div>
                                <div className='lg:left-[1vw] left-[4vw] absolute lg:h-[2vw] lg:w-[2vw] h-[12vw] w-[12vw] rounded-xl  border-2 border-white'><img className='lg:h-[2vw] lg:w-[2vw] h-[11vw] w-[11vw] rounded-xl' src="https://plus.unsplash.com/premium_photo-1771650827375-181d37a27ed1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                                <div className='lg:left-[2.2vw] left-[6vw] absolute lg:h-[2vw] lg:w-[2vw] h-[12vw] w-[12vw] rounded-xl bg-black border-2 border-white'><img className='lg:h-[2vw] lg:w-[2vw] h-[11vw] w-[11vw] rounded-xl' src="https://images.unsplash.com/photo-1772242859562-124ab5ab2c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                                <div className='lg:left-[3.4vw] left-[8vw] absolute lg:h-[2vw] lg:w-[2vw] h-[12vw] w-[12vw] rounded-xl bg-black border-2 border-white'><img className='lg:h-[2vw] lg:w-[2vw]  h-[11vw] w-[11vw]rounded-xl' src="https://plus.unsplash.com/premium_photo-1771650827375-181d37a27ed1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                                <div className='lg:left-[4.6vw] left-[10vw] absolute lg:h-[2vw] lg:w-[2vw] h-[12vw] w-[12vw] rounded-xl bg-black border-2 border-white'><img className='lg:h-[2vw] lg:w-[2vw] h-[11vw] w-[11vw] rounded-xl' src="https://images.unsplash.com/photo-1772107756927-a3975482b1ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                                <div className='lg:left-[5.8vw] left-[12vw] absolute lg:h-[2vw] lg:w-[2vw] h-[12vw] w-[12vw] rounded-xl bg-black border-2 border-white'><img className='lg:h-[2vw] lg:w-[2vw] h-[11vw] w-[11vw] rounded-xl' src="https://plus.unsplash.com/premium_photo-1771650827599-33e046949bad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                            </div>

                            <div className='absolute lg:left-[8.4vw] lg:right-0 right-[12vw]'>
                                <div className='text-yellow-400 flex'>
                                    <i class="ri-star-s-fill"></i>
                                    <i class="ri-star-s-fill"></i>
                                    <i class="ri-star-s-fill"></i>
                                    <i class="ri-star-s-fill"></i>
                                    <i class="ri-star-s-fill"></i>
                                </div>
                                <h5 className=' font-medium'>Trusted by <span className='text-white/50 bg-orange-800/50'>4.8k people</span></h5>
                            </div>
                        </div>

                        <Link to='/givereview' className='cursor-pointer active:scale-95 bg-white/50 items-center inline-block lg:px-[4.7vw] lg:py-[0.5vw] px-[4vw] py-[1.4vw] rounded-4xl'>Leave a review</Link>
                    </div>
                </div>


                <div className='lg:block hidden lg:h-full lg:w-[30vw] h-[110vw] w-full flex flex-col   bg-white/30 lg:bg-black lg:p-0 p-[6.5vw] rounded-lg lg:gap-1 gap-[14vw]'>
                    <div className='lg:h-[6vw] h-[10vw] w-full   text-white/50 rounded-xl lg:px-[2vw] px-[2vw] lg:py-[1.5vw] flex gap-2 items-center'>
                        <img className='lg:h-[3vw] lg:w-[3vw] h-[9vw] w-[9vw] object-cover rounded' src="https://plus.unsplash.com/premium_photo-1771650827599-33e046949bad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div>
                            <h5 className='text-xl  text-white/80 font-medium'>Emly Devis</h5>
                            <h6 className='text-sm text-gray-500 '>England hub</h6>
                        </div>
                    </div>


                    <div className='lg:h-[24vw] w-full  text-white/80 rounded-xl lg:bg-white/30 flex flex-col justify-between gap-[6vw] lg:gap-0 px-[1.6vw] py-[1vw]'>
                        <div className='flex items-center justify-between  '>
                            <div className='flex text-yellow-600 '><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i></div>
                        </div>

                        <div className='text-white/80'><p className='font-medium lg:text-[1.4vw] text-[7vw] text-end'>Incredible team! They delivered exactly what we needed, on time and beyond expectations.</p> </div>
                    </div>
                </div>


                <div className='lg:block hidden lg:h-full lg:w-[30vw] h-[120vw] w-full  bg-white/30 lg:bg-black   flex flex-col lg:p-0 p-[6.5vw] rounded-lg lg:gap-1  gap-[14vw]'>
                    <div className='lg:hidden block lg:h-[6vw] h-[10vw] w-full  text-white/50 rounded-xl g:px-[2vw] px-[4vw] lg:py-[1.5vw] flex gap-2 items-center'>
                        <img className='lg:h-[3vw] lg:w-[3vw] h-[9vw] w-[9vw] object-cover rounded'
                            src='https://images.unsplash.com/photo-1770721478216-3e5dbbe8dcc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D' alt="" />
                        <div>
                            <h5 className='text-xl text-white/80 font-medium'>Anjali shrewat</h5>
                            <h6 className='text-sm text-gray-500 '>accountanr</h6>
                        </div>
                    </div>


                    <div className='lg:h-[22vw]  w-full text-white/50 lg:bg-white/30 rounded-xl flex flex-col justify-between gap-[6vw] lg:gap-0 px-[1.6vw] py-[1vw]'>

                        <div className='flex items-center justify-between '>
                            <div className='flex text-yellow-600'><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i></div>

                        </div>

                        <div><p className='font-medium lg:text-[1.4vw] text-[7vw] text-white/80 text-end'>A smooth process from start to finish. Highly professional team!</p> </div>
                    </div>

                    <div className='lg:block hidden lg:h-[6vw] h-[10vw] w-full px-[2vw] text-white/50 rounded-xl g:px-[2vw]  lg:py-[1.5vw] flex gap-2 items-center'>
                        <img className='lg:h-[3vw] lg:w-[3vw] h-[9vw] w-[9vw] object-cover rounded'
                            src='https://images.unsplash.com/photo-1770721478216-3e5dbbe8dcc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D' alt="" />
                        <div>
                            <h5 className='text-xl text-white/80 font-medium'>Anjali shrewat</h5>
                            <h6 className='text-sm text-gray-500 '>accountanr</h6>
                        </div>
                    </div>

                </div>


                <div className=' lg:block hidden lg:h-full lg:w-[30vw] h-[120vw] w-full  bg-white/30 lg:bg-black lg:p-0 p-[6.5vw] flex flex-col rounded-lg lg:gap-1  gap-[14vw]'>
                    <div className='lg:h-[6vw] h-[10vw] w-full   text-white/50 rounded-xl g:px-[2vw] px-[2vw] lg:py-[1.5vw] flex gap-2 items-center'>
                        <img className='lg:h-[3vw] lg:w-[3vw] h-[9vw] w-[9vw] object-cover rounded'
                            src='https://images.unsplash.com/photo-1772107756927-a3975482b1ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D' alt="" />
                        <div>
                            <h5 className='text-xl text-white/80 font-medium'>Vansh Sharma</h5>
                            <h6 className='text-sm text-gray-500 '>Business Owner</h6>
                        </div>
                    </div>


                    <div className='lg:h-[22vw] w-full text-white/50 lg:bg-white/30 rounded-xl flex flex-col justify-between gap-[6vw] lg:gap-0 px-[1.6vw] py-[1vw]'>
                        <div className='flex items-center justify-between '>
                            <div className='flex text-yellow-600'><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i></div>
                        </div>

                        <div><p className='font-medium lg:text-[1.4vw] text-white/80 text-[7vw] text-end'>Our new branding is exactly what we envisioned - clean, modern, and unique. #1 in our industry.</p>
                        </div>

                    </div>
                </div>



            </div>


            <div className='lg:hidden block lg:h-[17vw] h-[30vw] w-full  text-white/50  rounded-xl flex items-start justify-between lg:gap-[1vw] gap-[8vw] p-[1.5vw]'>
                    <div className='flex items-end'>
                        <h4 className='lg:text-4xl text-[6vw] font-semibold'>4.9</h4>
                        <h6 className='text-semibold lg:text-sm text-[3vw]'>/5</h6>
                    </div>
                    <p className='lg:w-[12vw] font-medium  text-lg'>rating we got for<span className='text-white'> service & collabration</span> from our valuable Clients. </p>
            </div>
            <div className='lg:hidden  block mt-[10vw]' >

                <Swiper className='swiper-wraper' modules={[Autoplay]} autoplay={{delay: 0, disableOnInteraction: false,}} speed={4000} slidesPerView={1.1} 
                 spaceBetween={24} loop={true} grabCursor={true} allowTouchMove={false}>
                    {reviewsData.map((elem, idx) => (
                        <SwiperSlide key={idx} className=' w-[100vw]'>
                            <Testimonials
                                key={idx} image={elem.image} name={elem.name} profession={elem.profession} review={elem.review} idx={idx}
                            />
                        </SwiperSlide>

                    ))}

                </Swiper>

            </div >


        </div>
  )
}

export default Experiences
