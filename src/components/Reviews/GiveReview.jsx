import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'
import axios from 'axios'

const GiveReview = () => {

  const [msgRedirect, setMsgRedirect] = useState(false)

  const handleSubmit=(e)=> {
      e.preventDefault()
  
      const formData = new FormData(e.target)
  
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/give-review`, formData)
      
      .then(()=>{
        alert("email sent!")
        setMsgRedirect(true)
      })

      .catch((err)=>{
          alert("Error sending message"), 
          console.log(err)
      })
     }


    const reviewRef = useRef(null)
    const review2Ref = useRef(null)


    const tl = gsap.timeline()
    useGSAP(()=>{

        
        tl.from(reviewRef.current,{
            opacity:0,
            duration:0.3,
            delay:0.4,
           
        })

        tl.from(review2Ref.current,{
             opacity:0,
             duration:0.3,
            delay:0.4,
            
        })
    },[])

  return (
    <div className='h-screen w-screen flex items-center justify-center text-white/40'>
      <div  className='lg:w-1/2 lg:px-0 px-[5vw]'>
      <div ref={reviewRef} className='flex items-center lg:justify-center justify-start mb-[4vw] lg:ml-0 ml-[3vw]'>
        <h2 className='text-5xl w-1/2 font-semibold '>Leave a <span className='text-orange-800/70'>review</span> for us!</h2>
        </div>
             <form onSubmit={handleSubmit} ref={review2Ref} className='flex flex-col text-white mt-[20vw] lg:mt-[2.4vw] gap-[6vw] lg:gap-[1.5vw]'> 
                    <input className='pb-[1vw] border-b border-white/50' name='name' type="text" placeholder='Your name' required />
                    <input className='pb-[1vw] border-b border-white/50' name='email' type="email" placeholder='E-mail' required />
                    <input className='pb-[1vw] border-b border-white/50' name='review' type="text" placeholder='Review' required />
                    <input className='pb-[1vw] border-b border-white/50' name='rating' type="text" placeholder='Rating /5' required />
                    <button  className='bg-white/30  cursor-pointer active:scale-95 py-[2vw] lg:py-[0.46vw] rounded-2xl mt-[1vw]'>Send Message</button>
                </form>
                <p className={`text-white/50 font-medium text-[3vw] lg:text-[0.86vw] mt-[1vw] ${msgRedirect ? "opacity-100" : "opacity-0"}`}>* Thankyou for considering us, and for your rating also</p>
               
      </div>
    </div>
  )
}

export default GiveReview
