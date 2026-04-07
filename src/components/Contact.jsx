
import axios from 'axios'
import { useState } from 'react'

const Contact = () => {

    const [text1, setText1] = useState("")
    const [text2, setText2] = useState("")
    const [text3, setText3] = useState("")


    // Funtions to make inputs empty again after form submission
    const handleChangeText1 =(e) =>{
        setText1(e.target.value)
    }
    const handleChangeText2 =(e) =>{
        setText2(e.target.value)
    }
    const handleChangeText3 =(e) =>{
        setText3(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()


        const formData = new FormData(e.target)

        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/contact-email`, formData).then(()=>{alert("sent")}).catch((error)=>{alert(error)})

       

    }



    return (
        <div className='lg:h-[80vw] h-[250vw] bg-black  text-white/50 w-full p-[8vw] flex mb-[2vw] relative'>
            <div className='h-full w-1/2 flex flex-col gap-[12vw] lg:block hidden'>

                <div className=' w-[34vw] flex flex-col gap-[2vw]'>
                    <p className=' font-semibold text-3xl'>Whether you're looking to build a stunning <span className='text-orange-800/70'>website</span>, boost your <span className='text-orange-800/70'>brand</span>, or drive measurable <span className='text-orange-800/70'>results</span>,we're here to help. </p>
                    <div className='flex gap-2 mt-[4vw]'>
                        <img className='h-[2vw] w-[2vw] rounded-full object-cover' src="https://images.unsplash.com/photo-1672678413759-4ed61878b980?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" alt="" />
                        <div>
                            <h4 className='text-lg font-medium tracking-wide '>Nitish Pal</h4>
                            <h5 className='text-sm text-white/40 font-medium tracking-wide'>Chief Associate Manager</h5>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col mt-[19vw]'>
                    <h5 className='font-medium  '>(312) 555-2468</h5>
                    <div className='flex items-center  gap-1'>
                        <div className='h-[0.56vw] w-[0.56vw] rounded-full '></div>
                        <h2 className='font-medium'>hello@prideDesk.com</h2>
                    </div>
                </div>

            </div>


            <div className='h-full lg:w-1/2 w-full flex flex-col gap-[1vw]'>

                <h2 className='text-5xl w-1/2 font-semibold'>Have a <span className='text-orange-800/70'>Project</span> in mind??</h2>

                {/* Form */}

                <form onSubmit={handleSubmit} className='flex flex-col text-white mt-[20vw] lg:mt-[2.4vw] gap-[6vw] lg:gap-[1.5vw]'>
                    <input onChange={handleChangeText1} value={text1} name='name' className='pb-[1vw] border-b border-white/50' type="text" placeholder='Your name' required />
                    <input onChange={handleChangeText2} value={text2} name='email' className='pb-[1vw] border-b border-white/50' type="email" placeholder='E-mail' required />
                    <input onChange={handleChangeText3} value={text3} name='message' className='pb-[1vw] border-b border-white/50' type="text" placeholder='Message' required />
                    <button className='bg-white/30  cursor-pointer active:scale-95 py-[2vw] lg:py-[0.46vw] rounded-2xl mt-[1vw]'>Send Message</button>
                </form>


                {/* <p className={`text-white/50 font-medium text-[3vw] lg:text-[0.86vw] `}>* We'll redirect to you within 24 hrs via e-mail</p> */}


                <div className=' text-white flex w-full gap-[19vw]  mt-[9vw]'>
                    <div className='font-medium flex flex-col gap-[0.8vw] text-white/80 text-lg'>
                        <h5 className='text-white/50 text-sm'>Navigation</h5>
                        <a href="/#">Home</a>
                        <a href="/#about">About</a>
                        <a href="/#projects">Projects</a>

                    </div>
                    <div className='font-medium flex flex-col gap-[0.8vw] text-lg text-white/80'>
                        <h5 className='text-white/50 text-sm'>Social</h5>
                        <h4>Twitter</h4>
                        <h4>Instagram</h4>
                        <h4>Dribble</h4>
                    </div>
                </div>


                <div className='lg:leading-tight leading-[11vw] lg:mt-0 mt-[25vw]'>

                    <h1 className='lg:text-[7vw] flex text-[14vw] text-white/60 font-medium mt-[1vw]'>
                        <span >P</span>
                        <span>r</span>
                        <span>i</span>
                        <span>d</span>
                        <span>e</span>
                        <span>D</span>
                        <span>e</span>
                        <span>s</span>
                        <span>k</span>
                    </h1>
                    <h4 className='ml-[0.6vw] lg:text-[2vw] text-[7vw] text-orange-800/70 font-semibold'>Studio</h4>
                </div>

            </div>

            <div className='absolute bottom-0 h-0.5  w-[85vw] border-b border-orange-800/70 mb-[1vw] '></div>

        </div>
    )
}

export default Contact
