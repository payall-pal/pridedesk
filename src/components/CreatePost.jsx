import axios from "axios"
import { useEffect } from "react"

const CreatePost=()=>{

  const handleSubmit = async (e) =>{
    e.preventDefault()


    const formData =new FormData(e.target)

     await axios.post("http://localhost:3000/create-post", formData)
     .then((res)=>{alert("post created")})
     .catch((err)=>{console.log(err)})
  }

  

    return (
        <div className="h-screen w-screen bg-black text-white flex items-center justify-center ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-[1vw] bg-white/30 p-[2vw]">
      <label>Name</label>
        <input type="text" name='name' placeholder='Ayush' className="border" />
        <label className=" mt-[1vw]">Choose Image</label>
        <input type="file" name="image" accept='image/*' className="border" />
        <label className=" mt-[1vw]">Caption</label>
        <input type="text" name='caption' placeholder='good' className="border py-[0.2vw] " />
        <button type='submit' className=" py-[0.4vw] bg-green-400   mt-[1vw]">Submit</button>
      </form>
      
    </div>
    )
}

export default CreatePost