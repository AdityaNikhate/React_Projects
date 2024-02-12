import React from 'react'

const  About = () => {
  return (
    <div data-scroll data-scroll-section className='w-full py-24 px-10 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='w-5/6 font-[Roboto] text-5xl leading-1'>
      Ochi is a strategic partner for fast-grow­ing tech businesses
       that need to <span className='underline underline-offset-8 decoration-2 text-wrap'>raise funds</span>, sell prod­ucts, ex­plain com­plex ideas, 
       and hire great peo­ple.</h1>  

       <div className='w-full border-t-[1px] mt-14 border-[#939392] flex'>
          <div className='w-1/2'>
            <h1 className='text-5xl my-4'>Our approach:</h1>
            <button className='px-7 py-4 rounded-full bg-zinc-950 text-white flex uppercase items-center gap-10'>Read More
              <div className='w-2 h-2 bg-zinc-50 rounded-full '></div>
            </button>
          </div>

          <div className='w-1/2 h-[70vh] bg-white rounded-xl my-4 overflow-hidden'>
            <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" className='w-full h-full' alt="" />
          </div>
       </div>
    </div>
  )
}

export default  About;