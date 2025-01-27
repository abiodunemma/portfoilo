import Image from 'next/image'
import React from 'react'

const Project = () => {
  return (
<div className=" py-0 flex flex-col mt-0 p-0  bg-black">
  <div className=" mt-5 p-0  text-orange-600  justify-center text-center text-lg sm:text-xl md:text-2xl font-bold bg-black">
PROJECTS
  </div>
 
<div className=' mb-4  border-red-900 bg-white'>
<div className=' py-16  mr-10 w-full  mt-0 p-0
'>
<Image 
 src="/travels.png"
 alt='react_work'
 width={900}
 height={100}
 className='lg:w-full'
/>
</div>
</div>








  </div>

  )
}

export default Project