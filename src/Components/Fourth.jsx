import React from 'react'
import { Link } from 'react-router-dom'

const Fourth = () => {
  return (
    <div className="w-full p-4 h-screen gap-10 justify-evenly items-center flex flex-row ">
      <div className='flex       mt-7 justify-center flex-col w-[40%] h-[90%]  '>
        <span className='text-[40px] font-bold  '>A strategic business tool</span>
        <span className='text-[40px] font-bold  '>for the entire organization</span>
        <span className='text-[20px] font-sm'>Netpresenter is a robust employee communication platform to be used strategically within organizations. Our software was designed for use by the entire organization: from HR to C-level. A data-driven approach based on employee feedback and automated statistics helps organizations across the globe to be more successful. Discover what makes Netpresenter unique and how our platform helps solve problems for the largest organizations in the world.</span>
        
        <button type="button" class="py-2.5 px-5 mr-2 w-[40%] mb-2 mt-3 text-sm font-sm text-white focus:outline-none bg-[#4633d6]  rounded-lg flex flex-row border border-[#4633d6] hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Why Netpresenter
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-8 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

</button>

        </div>  
        <div className='flex   items-center  justify-center  w-[40%] h-[90%]  '>
            <img className=' object-cover  ' src="https://netpresenter.wpenginepowered.com/wp-content/uploads/2022/04/Strategic-Business-Tool-640x640.png" alt="" />
        </div> 
        
        

    </div>
    
  )
}

export default Fourth