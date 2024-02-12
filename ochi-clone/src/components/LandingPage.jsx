import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  
  return (
      <div data-scroll data-scroll-section data-scroll-speed='-.1' className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
          {["We Create","EYE-OPENING","PRESENTATIONS"].map((item, index)=>{
            return (
              <div className='masker'>
                <div className="w-fit flex items-center">
                  {index === 1 && (<motion.div initial={{width:0}} animate={{width:'8vw'}} transition={{ease:[0.68, -0.6, 0.32, 1.6], duration:'1.5'}}  className='w-[8vw] h-[4.3vw] relative -top-[0vw]  bg-red-500'></motion.div>)}
                  <h1 key={index} className=' uppercase text-8xl leading-[5vw] tracking-[0.1vw] font-semibold font-["Archivo_Narrow"] '>{item}</h1>
                </div>
              </div>
            )
          })}
        </div>

        <div className='border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20'>
          {["For public and private companies", "From the first pitch to IPO"].map((item, index)=>(
            <p className='text-md font-light tracking-[0.01vw] leading-none'>{item}</p>
          ))}
          
          <div className='start flex items-center gap-2'>
            <div className='px-5 py-2 border-[1.5px] uppercase text-sm border-zinc-500 rounded-full'>start the project</div>
            <div className=' p-2 rounded-full border-[1px] border-zinc-500'>
              <FaArrowUpLong className='rotate-45' />
            </div>
          </div>
        </div>
      </div>
  )
}

export default LandingPage