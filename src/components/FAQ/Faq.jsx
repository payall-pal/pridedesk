import { useState } from "react"
import FaqData from "./FaqData"



const Faq = () => {

    const [activefaq, setActivefaq] = useState(null)

    const Data = [
        {
            question: "How does the monthly subscritpion model work?",
            ans: "We build modern, fast and scalable websites."
        },
        {
            question: "How long does it take to build a website?",
            ans: "We build modern, fast and scalable websites."
        },
        {
            question: "Can you redesign my existing website?",
            ans: "We build modern, fast and scalable websites.lorem1  We build modern, fast and scalable websites."
        },
        {
            question: "Do you offer custom websites or use templates?",
            ans: "We build modern, fast and scalable custom websites or use templates websites."
        },
        {
            question: "What's included in your SEO services?",
            ans: "We build modern, fast and  included in your scalable  included in your websites."
        },
        {
            question: "How do I get started?",
            ans: "We build modern, uild modern, fast and scalable w fast and scalable websites."
        }
    ]




    return (
        <div className='lg:h-[50vw] h-[230vw] w-full  bg-gray-200 px pt-[6vw] px-[6vw]  py-[6vw] flex lg:flex-row flex-col'>

             <div className="lg:h-full h-[50vw] lg:w-1/2 lg:p-0 px-[2vw]">
                <h1 className="lg:text-[5.4vw] text-[17vw] lg:font-medium tracking-wide">FAQs</h1>
                <p className="lg:text-[0.9vw] text-black/60 font-medium text-[4.6vw] lg:ml-0 ml-[5vw]">Having doubt, let us solve some for you
                     <span className="lg:block hidden">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; that are previously asked by our clients</span></p>
            </div>
            
            <div className="lg:w-1/2  flex flex-col gap-2 lg:mt-0 mt-[15vw] ">
                {Data.map((faq, idx) => (
                    <FaqData key={idx} idx={idx} question={faq.question} ans={faq.ans} activefaq={activefaq} setActivefaq={setActivefaq} />
                ))}
            </div>

        </div>
    )
}

export default Faq
