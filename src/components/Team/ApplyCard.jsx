import { useRef, useState } from 'react'
import axios from 'axios'

const ApplyCard = () => {

    const skillsList = ["Content-creation", "Web Development", "App Development", "Branding"]

    const [selectedSkills, setSelectedSkills] = useState([])
    // const [msgRedirect, setMsgRedirect] = useState(false)

    const [text1, setText1] = useState("")
    const [text2, setText2] = useState("")
    const [text3, setText3] = useState("")


    // Funtions to make inputs empty again after form submission
    const handleChangeText1 = (e) => {
        setText1(e.target.value)
    }
    const handleChangeText2 = (e) => {
        setText2(e.target.value)
    }
    const handleChangeText3 = (e) => {
        setText3(e.target.value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/apply`, formData)

            .then(() => {
                alert("Application Sent!")
                console.log("Applied")
                // setMsgRedirect(true)

                setText1("")
                setText2("")
                setText3("")
            })

            .catch((err) => {
                alert("Error sending application")
                console.log("Error Applying")
                console.log(err)
            })

    }

    const handleSelect = (e) => {
        const value = e.target.value

        if (value && !selectedSkills.includes(value)) {
            setSelectedSkills([...selectedSkills, value])
        }
    }

    const removeSkill = (skill) => {
        setSelectedSkills(selectedSkills.filter((s) => s !== skill))
    }


    const applyRef = useRef()

    return (
        <div className='h-screen w-screen text-white/40 bg-black flex items-center justify-center'>
            <div className='h-2/3 lg:w-1/2 w-full flex tracking-wide  flex-col gap-[1vw]  lg:px-0 px-[5vw]'>

                <h2 ref={applyRef} className=' text-[8.3vw] lg:text-[2.4vw] w-[40vw] font-semibold'>Be with us & let's do <span className='text-orange-800/70'>Something</span> Good.</h2>

                <form onSubmit={handleSubmit} className='flex flex-col text-white mt-[19vw] lg:mt-[2.4vw] gap-[6vw] lg:gap-[1.5vw]'>
                    <input onChange={handleChangeText1} value={text1} className='pb-[1vw] border-b border-white/50' type="text" placeholder='Your name' name='name' required />
                    <input onChange={handleChangeText2} value={text2} className='pb-[1vw] border-b border-white/50' type="email" placeholder='E-mail' name='email' required />
                    <div className='flex flex-col gap-[2vw]'>



                        <select name='skills[]' className='bg-black text-[4vw] lg:text-[0.8vw] text-white/50 border-b border-white/50 lg:pb-[1vw] pb-[2vw]' onChange={handleSelect}>
                            <option className=' lg:ml-[-0.1vw]' value=''>Select skill</option>
                            {skillsList.map((skill, idx) => (
                                <option key={idx} value={skill}>{skill}</option>
                            ))}
                        </select>
                        <div className='flex gap-[2vw] lg:text-[0.8vw] text-[3.5vw] w-full flex-wrap lg:mt-0 mt-[4vw] lg:mb-[3vw] mb-[8vw] '>
                            {selectedSkills.map((skill, index) => (
                                <div className=' text-white/70 bg-white/30 lg:py-[0.4vw] px-[4vw] py-[0.7vw] lg:px-[0.9vw] rounded-lg' key={index} > {skill}
                                    <button onClick={() => removeSkill(skill)}><i class="ri-close-line"></i></button></div>
                            ))}
                        </div>




                    </div>
                    <input onChange={handleChangeText3} value={text3} className='lg:mt-[-2vw] mt-[-6vw] pb-[1vw] border-b border-white/50' type="text" placeholder='Message' name='message' required />
                    <button className='bg-white/30  cursor-pointer active:scale-95 py-[2vw] lg:py-[0.46vw] rounded-2xl mt-[1vw]'>Send Message</button>
                </form>

                <p className={`text-white/50 font-medium text-[3.2vw] lg:text-[0.86vw] `}>* We'll redirect to you within 2-3 working days via e-mail</p>
            </div>
        </div>
    )
}

export default ApplyCard
