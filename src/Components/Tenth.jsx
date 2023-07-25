import React from 'react'

const Tenth = () => {
  return (
    <div className='w-full h-screen flex flex-row items-center justify-center '>
       <div className='w-[42%] h-[60%] flex items-center  flex-col '>
       <span className='text-[40px] font-bold mr-52  '>Our integrations make</span>
       <span className='text-[40px] font-bold mr-80 '>your work easier </span>
       <span className='text-[20px] font-sm mr-28'>Let us do the heavy lifting for you. Connect Netpresenter with the tools you already use to automatically publish, display and share content from various data sources. Integrate our platform with SharePoint, Teams, Power BI, Workplace, database, or Social Media accounts to easily redistribute your existing content on every available screen. Prevent double entry to save costly time and bring relevant content to your employees to keep everyone informed about the latest and greatest.

</span>
<button type="button" class="py-2.5 px-5 mr-96 w-[40%] mb-2 mt-3  text-sm font-sm text-white focus:outline-none bg-[#4633d6]  rounded-lg flex flex-row border border-[#4633d6] hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">See all integrations
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-8 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

</button> 
       </div>
       <div className='w-[40%] h-[60%] flex flex-col'>
        <img src="https://netpresenter.wpenginepowered.com/wp-content/uploads/2020/12/Integrations_2023-640x400.png" alt="" />
       </div>

    </div>
  )
}

export default Tenth