import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='0.5' className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]'>
      <div className="text border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap overflow-hidden">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear', repeat: Infinity, duration:6}} className='text-[18vw] leading-none font-bold font-["Archivo_Narrow"] pr-10 uppercase'>we are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear', repeat: Infinity, duration:6}} className='text-[18vw] leading-none font-bold font-["Archivo_Narrow"] pr-10 uppercase'> we are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee