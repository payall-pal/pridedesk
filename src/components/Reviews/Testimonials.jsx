

const Testimonials=({ idx, name, profession, image, review })=>{
    
     return (
        <div>
            <div className='lg:h-full lg:w-[30vw] h-[110vw] w-[75vw] flex flex-col   bg-white/30 lg:bg-black lg:p-0 p-[6.5vw] rounded-lg lg:gap-1 gap-[14vw]'>
                <div className='lg:h-[6vw] h-[10vw] w-full   text-white/50 rounded-xl lg:px-[2vw] px-[2vw] lg:py-[1.5vw] flex gap-2 items-center'>
                    <img className='lg:h-[3vw] lg:w-[3vw] h-[9vw] w-[9vw] object-cover rounded'
                        src={image} alt="" />
                    <div>
                        <h5 className='text-xl  text-white/60 font-medium'>{name}</h5>
                        <h6 className='text-sm text-gray-500 '>{profession}</h6>
                    </div>
                </div>


                <div className='lg:h-[24vw] w-full  text-white/80 rounded-xl lg:bg-white/30 flex flex-col justify-between gap-[6vw] lg:gap-0 px-[1.6vw] py-[1vw]'>
                    <div className='flex items-center justify-between  '>
                        <div className='flex text-yellow-600 '><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i><i class="ri-star-s-fill"></i></div>
                    </div>

                    <div className='text-white/80'><p className='font-medium lg:text-[1.4vw] text-[7vw] text-end'>
                        {review}</p> </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials