


const ProjectCard = ({ index, name, image }) => {
  return (
     <div  className=' lg:h-[22vw] lg:w-[26vw] h-[70vw] w-[90vw]  rounded-lg  flex flex-col gap-[4vw] lg:mt-0 mt-[11vw]'>
      <h2 className='project-name lg:text-2xl text-[4vw] lg:font-semibold '>{name}</h2>
      <img className='project-card lg:h-[20vw] lg:w-[30vw] h-[60vw] w-full rounded-lg object-cover' src={image} alt="" />

    </div>
  )
}

export default ProjectCard
