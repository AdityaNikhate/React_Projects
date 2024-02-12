import React from 'react'

const Featured = () => {
  return (
    <div className='w-full py-10'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-6xl font-thin'>Featured projects</h1>

      </div>
      <div className='px-20'>
      <div className='cards w-full flex gap-5 py-10'>
          <div className='card w-1/2 h-[80vh] relative rounded-xl '>
            <h1 className='absolute left-full text-[#cdea68] -translate-x-10 top-1/2 -translate-y-10 z-10 mb-10 text-6xl font-["Archivo_Narrow"] tracking-tighter'>
            {"FYDE".split('').map((item, index)=><span className=''>{item}</span>)}</h1>
            <div className='card1 w-full h-full rounded-xl z-0 overflow-hidden'>
            <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
            </div>
          </div> 

          <div className='card w-1/2 h-[80vh] relative rounded-xl '>
            <h1 className='absolute right-full text-[#cdea68] translate-x-10 top-1/2 -translate-y-10 z-10 mb-10 text-6xl font-["Archivo_Narrow"] tracking-tighter'>
              {"VISE".split('').map((item, index)=><span className=''>{item}</span>)}
            </h1>
            <div className='card1 w-full h-full rounded-xl z-0 overflow-hidden'>
            <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Featured