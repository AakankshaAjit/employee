import React from 'react'

const Eleven = () => {
  return (
    <>
    <div className='w-full h-screen   flex items-center justify-center flex-col '>
        <div className='w-[40%] h-[30%]  mb-24 flex items-center justify-center flex-col '>
            <span className='text-[35px] font-bold '>We love our customers,</span>
            <span className='text-[35px] font-bold mb-4 text-blue-600'>our customers love us</span>
            <span className='text-[20px] font-sm'>Netpresenter is highly rated on Capterra and G2. Read our</span>
            <span className='text-[20px] font-sm'>reviews and find out why customers love us.</span>
        </div>
        <div className='w-[70%] h-[35%] flex flex-row mb-2'>
          <div className='w-[30%] h-[85%] bg-white shadow-2xl mt-3 ml-3 flex items-center justify-center  flex-col'>

            <span className='text-lg font-bold '>“Highly recommend for</span>
            <span className='text-lg font-bold '>communicating with the</span>
            <span className='text-lg font-bold '>evolving mobile/hybrid</span>
            <span className='text-lg font-bold '>workforce”</span>
            <span className='text-sm font-medium mt-4'>Anonymous</span>
            <img  className=' mt-5'src="https://netpresenter.wpenginepowered.com/wp-content/themes/netpresenter/resources/images/g2.svg" alt="" />
          </div>
          <div className='w-[30%] h-[85%] bg-white shadow-2xl mt-3 ml-3 flex items-center justify-center  flex-col'>

          <span className='text-lg font-bold mt-16'>"Great Communication Tool"</span>
          <span className='text-sm font-medium mt-4'>Marjo Goffin</span>
          <img  className='mt-11'src="https://netpresenter.wpenginepowered.com/wp-content/themes/netpresenter/resources/images/g2.svg" alt="" />
            
          </div>
          <div className='w-[30%] h-[85%] bg-white shadow-lg mt-3 ml-3 flex items-center justify-center flex-col'>
          <span className='text-lg font-bold mt-4'>"An enrichment for our internal</span>
          <span className='text-lg font-bold  '>communication”"</span>
          <span className='text-sm font-medium mt-8'>Anonymous</span>
          <img className='mt-9'src="https://netpresenter.wpenginepowered.com/wp-content/themes/netpresenter/resources/images/g2.svg" alt="" />

          </div>
          
        </div>
        <div className='w-[55%] h-[22%] flex items-center justify-center flex-row gap-20  '>
          <img src="https://netpresenter.wpenginepowered.com/wp-content/uploads/2021/12/capterra_rating_blocks_12_2021.png" alt="" />
          <img src="https://netpresenter.wpenginepowered.com/wp-content/uploads/2021/12/g2_rating_blocks_03_2022_EN.png" alt="" />

        </div>
        
          
          
        </div>
        
          
        
        </>
        
    
    
  )
}

export default Eleven