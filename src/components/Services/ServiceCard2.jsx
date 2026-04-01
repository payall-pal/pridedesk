

const ServiceCard2 = ({title, description,skills, index}) => {
   return (
    <div className='text-black h-[120vw] w-full bg-black/10 rounded-2xl px-[8vw] p-[5vw]'>
      <h4 className='text-[4vw]'>{index}</h4>
      <h1 className='text-[12vw] font-medium leading-[10.5vw] ml-[1vw] mt-[6vw]'>{title}</h1>
      <h3 className='text-[4.7vw] mt-[2vw] ml-[1vw]'>{description}</h3>
      <h5 className='text-[6vw] mt-[6vw] ml-[1vw]'>categories</h5>
      <div className='flex flex-col mt-[3vw] gap-[3vw] ml-[1vw]'>
        {skills.map((elem, idx) => (


                <h1 className='   rounded-3xl  text-black/70 text-[3.9vw] ' key={idx}>-{elem}</h1>
              ))}
      </div>


    </div>
  )
}

export default ServiceCard2
