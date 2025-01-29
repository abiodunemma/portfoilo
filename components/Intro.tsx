import Image from 'next/image'
import React from 'react'

const Intro = () => {
  return (
    <div className='bg-black  text-white h-100 relative flex flex-col ' >
     <div className=' w-full flex items-center  p-0 m-0 justify-center py-30  '>
      <div className='  rounded-full text-center justify-center py-2 px-2 bg-gradient-to-r from-red-950 to-purple-950'>


         <Image
        src="/Avatar.png"
        alt='dp'
        width={100}
        height={100}
        className=''
        />
              </div>
      </div>

      <div className='bg-black py-4 flex flex-col text-white text-center justify-center mb-4'>
  <h1 className='text-center text-lg sm:text-xl md:text-2xl font-bold font-mono'>
    I AM A FULL-STACK DEVELOPER
  </h1>
  <p className='text-center font-bold text-md sm:text-lg mt-2 sm:mt-2 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent font-serif'>
    About Me
  </p>
</div>

<div className='py-4 flex  text-center justify-center'>

<p className='text-center justify-center text-xs sm:text-sm mb-4 md:text-lg lg:text-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mt-0  text-gray-400 font-serif'>
  I am a passionate Full Stack Developer with 4 years of professional experience building robust and scalable web applications.
  While I excel at managing both frontend and backend development,
  my expertise and primary focus lie in backend development,
  where I craft efficient systems that power seamless
  and secure user experiences.
</p>


</div>
<div className=" py-4 flex flex-col lg:flex-row text-center justify-center items-center space-y-4 lg:space-y-0 lg:space-x-10">

  <div className="border-2 border-red-500 py-4 px-10 justify-center flex items-center text-white hover:bg-white 
    hover:text-black hover:border-white rounded-2xl 
    text-base sm:text-sm sm:py-2 sm:px-4 lg:text-lg lg:py-4 lg:px-10 md:py-4 md:px-10">
    Get in touch
  </div>


  <div className=" text-white hover:bg-white 
    hover:text-black hover:border-white rounded-2xl 
    py-4 px-10 sm:py-2 sm:px-4 sm:text-sm 
    lg:text-lg lg:py-4 lg:px-10 border-purple-500 border-2  md:py-4 md:px-10 ">
    Download Cv
  </div>

</div>
<div className=' mb-4 mt-5 text-center justify-center  text-gray-400 '>
  EXPERIENCE WITH
</div>
<div className=' flex items-center  justify-between '>
  <Image
  src="laravel.svg"
  alt="laravel"
  width={40}
  height={40}
   className='sm:item-sm'
  
  />

<Image
  src="/nodejs.png"
  alt="next_icon"
  width={35}
  height={40}
  
  />

<Image
  src="/javascript.png"
  alt="javascript"
  width={30}
  height={40}
   className='sm:item-sm'
  
  />
  <Image
  src="/html.png"
  alt="html"
  width={30}
  height={40}
   className='sm:item-sm'
  
  />
  <Image
  src="/css.png"
  alt="css"
  width={30}
  height={40}
   className='sm:item-sm'
  
  />
    <Image
  src="/reactjs.png"
  alt="reactjs"
  width={30}
  height={40}
  className='sm:item-sm'
  />
</div>
</div>



     
  )
}

export default Intro