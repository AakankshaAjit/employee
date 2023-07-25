import React from 'react'

const Second = () => {
  return (
    <>
     <div className='w-[95%] h-56  flex flex-row gap-44  items-center justify-center   '>
     <div className='w-32 h-32 bg-gray-100   mb-5 rounded-full flex flex-col gap-8'>
      <img  className='w-10 h-10 ml-12  absolute top-[115%] 'src="https://netpresenter.wpenginepowered.com/wp-content/uploads/2021/08/icon-data-file-bars-info.svg" alt="" />
      <span className='text-[#513cee] font-extrabold text-3xl mr-60 absolute top-[125%]'>83%</span> 
      <span className='absolute top-[125%] ml-16 font-extrabold text-black text-3xl'>Better</span> 
      <span className='w-[40%] h-24 absolute top-[131%] font-medium text-lg   '>
       <span className=''>Informed  </span>
         <span className=' '>Employees  </span></span>
     </div>
   <div className='w-32 h-32 bg-gray-100   mb-5 rounded-full flex flex-row gap-8'>
      <img  className='w-10 h-10  absolute top-[115%]  'src="https://netpresenter.wpenginepowered.com/wp-content/uploads/2021/08/icon-performance-increase-1.svg" alt="" />
      <span className='text-[#513cee] font-extrabold text-3xl mr-60 absolute top-[125%]'>92%</span> 
      <span className='absolute top-[125%] ml-16 font-extrabold text-black text-3xl'>Better</span> 
      <span className='w-[40%] h-24 absolute top-[131%] font-medium text-lg    '>
       <span className=''>Overall  </span>
         <span className=' '>Communication  </span></span>

     </div>
     <div className='w-32 h-32  bg-gray-100   mb-5 rounded-full flex flex-row gap-8'>
      <img  className='w-10 h-10 ml-12  absolute top-[115%]  'src="https://netpresenter.wpenginepowered.com/wp-content/uploads/2021/08/icon-data-file-heart.svg" alt="" />
      <span className='text-[#513cee] font-extrabold text-3xl mr-60 absolute top-[125%]'>92%</span> 
      <span className='absolute top-[125%] ml-16 font-extrabold text-black text-3xl'>Better</span> 
      <span className=' h-24 absolute top-[131%] font-medium text-lg    '>
       <span className=''>Overall  </span>
         <span className=' '>Communication  </span></span>

     </div>
     
     </div>
     <div className='w-[96%] h-11 flex items-center justify-center absolute top-[140%]'>
     <span className='text-lg font-lg '>Need more proof? Read our customer stories to discover the impact of Netpresenter</span>
     </div>
    
    
    
    </>
  )
}

export default Second