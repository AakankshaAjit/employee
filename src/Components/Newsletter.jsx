import React from 'react'

const Newsletter = () => {
  return (
    <>
    <div className='w-full h-screen bg-white shadow-lg flex flex-col  items-center justify-center '>
      <div className='w-[95%] h-96  flex flex-row '>
        <div className='w-[40%] h-[40%] ml-32 flex  flex-col mt-28  '>
            <span className='text[20px] font-bold flex items-start justify-start'>Subscribe for our monthly newsletter</span>

            <span className='text-sm font-medium'>We provide you each month with valuable insights in the field</span>
            <button type="button" class="py-2.5 px-5 mr-2 w-[20%] mb-2 mt-4 text-sm font-sm text-white  font-bold focus:outline-none bg-[#4633d6]  rounded-lg flex flex-row border border-[#4633d6] hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Subscribe
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-8 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

</button> 
        </div>
    
        
        <div className='w-[35%] h-[40%] flex flex-col  ml-44  mt-28   '>
        <span className='text[20px] font-bold flex justify-start '>Follow us on social media</span>
        <span className='text-sm font-sm '> Follow us on your favorite social channels to stay</span>
        <span className='text-sm font-sm'>informed about the latest and greatest</span>
        <div className='w-[70%] h-[12%] mt-5 ml-1 flex flex-row gap-2 '>
            <div className='w-10 h-10 bg-[#513cee] rounded-sm mr-2'>
                <span className='text-[23px] font-bold text-white ml-2 mt-5'>in</span>
            </div>
            <div className='w-10 h-10 bg-[#513cee] rounded-sm mr-2'>
            <span className='text-[26px] font-bold text-white ml-3 '>f</span>

            </div>

            
            <div className='w-10 h-10 bg-[#513cee] rounded-sm mr-2'>
            <svg class="w-6 h-6 text-white mt-2 ml-2 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
  </svg>
            </div>
            <div className='w-10 h-10 bg-[#513cee] rounded-sm mr-2'>
            <svg class="w-6 h-6 text-white mt-2 ml-2 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
    <path fill-rule="evenodd" d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z" clip-rule="evenodd"/>
  </svg>
            </div>
            <div className='w-10 h-10 bg-[#513cee] rounded-sm mr-2'>
            <svg class="w-6 h-6 text-white ml-2 mt-2 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
    <path d="M12.5 0 10 4.156 7.857 0H0l10 18L20 0h-7.5ZM2.486 1.5h2.4L10 10.8l5.107-9.3h2.4L10 15.021 2.486 1.5Z"/>
  </svg>
            </div>
            <div className='w-10 h-10 bg-[#513cee] rounded-sm mr-2'>
            <svg class="w-6 h-6 text-white mt-2 ml-2 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
    <path d="M5 5V.13a2.98 2.98 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Zm1.5 10c.828 0 1.5-.448 1.5-1s-.672-1-1.5-1-1.5.448-1.5 1 .672 1 1.5 1Z"/>
    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM12 10a1 1 0 0 1-1-1 2.971 2.971 0 0 0-1-2.237V13.5a.963.963 0 0 1-.037.185c.019.104.031.21.037.315a3.283 3.283 0 0 1-3.5 3A3.283 3.283 0 0 1 3 14a3.283 3.283 0 0 1 3.5-3 3.942 3.942 0 0 1 1.5.3V5a1 1 0 0 1 1.316-.948C9.467 4.1 13 5.321 13 9a1 1 0 0 1-1 1Z"/>
  </svg>
            </div>

        </div>



        </div>
        </div>
        <div className='w-[80%] h-[40%] flex flex-row gap-4'>
          <div className='w-[45%] h-[40%] flex flex-col justify-between '>
            <img className='w-64 h-72' src="https://netpresenter.wpenginepowered.com/wp-content/themes/netpresenter/resources/images/svg/logo-new.svg" alt="" />
            <span className='text[20px] font-bold'>Employees measurably better informed,</span>
            <span className='text[20px] font-bold'>engaged, productive, and safe</span>
            
          </div>
          <div className='w-[60%] h-[90%]  ml-32 flex flex-row gap-7'>
            <div className='w-[28%] h-[98%] ml-2 mt-1 flex flex-col'>
              <span className='text-[20px] font-bold'>Netpresenter</span>
              <span className='text-[18px] font-medium text-[#77777c]'>Solutions</span>
              <span className='text-[18px] font-medium text-[#77777c]'>Why Netpresenter</span>
              <span className='text-[18px] font-medium text-[#77777c]'>Platform</span>
              <span className='text-[18px] font-medium text-[#77777c]'>How it works</span>
              <span className='text-[18px] font-medium text-[#77777c]'>Pricing</span>
            </div>
            <div className='w-[28%] h-[98%] ml-2 mt-1  flex flex-col'>
            <span className='text-[20px] font-bold'>Netpresenter</span>
              <span className='text-[18px] font-medium text-[#77777c]'>Knowledge Centrer</span>
              <span className='text-[18px] font-medium text-[#77777c]'>Documentation</span>
              <span className='text-[18px] font-medium text-[#77777c]'>HelpDesk</span>
              <span className='text-[18px] font-medium text-[#77777c]'>Blog</span>
              

            </div>
            <div className='w-[28%] h-[98%] ml-2 mt-1 flex flex-col'>
            <span className='text-[20px] font-bold'>Netpresenter</span>
              <span className='text-[18px] font-medium text-[#77777c]'> About Us</span>
              <span className='text-[18px] font-medium text-[#77777c]'>Partners</span>
              <span className='text-[18px] font-medium text-[#77777c]'>Customer Stories</span>
              <span className='text-[18px] font-medium text-[#77777c]'>Careers</span>
              <span className='text-[18px] font-medium text-[#77777c]'>Social Responsibility</span>
              <span className='text-[18px] font-medium text-[#77777c]'>Contact Us</span>
              
              

            </div>
            

          </div>
          


        </div>
        
        </div>
        
        </>
        
  )
}

export default Newsletter