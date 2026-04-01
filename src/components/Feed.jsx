import  { useState,  useEffect } from 'react'
import axios from "axios"


const Feed =()=>{

    const [posts, setPosts] = useState([
        

    ])



    useEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then((res)=>{
            setPosts(res.data.posts)
        })
    }, [])

    return(
    
    <div className='h-screen w-screen bg-black text-white p-[5vw]'>
        {posts.map((post)=>(
            <div key={post._id} className="h-[20vw] w-[24vw] bg-white/30 flex flex-col p-[2vw]">
                <img className="h-[15vw] w-[20vw] " src={post.image} alt={post.caption} />
                <p className="text-[0.6vw]">{post.caption}</p>
            </div>
        ))
        }

    </div>


    )

}

export default Feed