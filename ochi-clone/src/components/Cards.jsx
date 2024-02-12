import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen  flex items-center px-12 gap-5'>
      <div className="cardcontainer h-[50vh] w-1/2 ">
        <div className="card relative w-full h-full rounded-xl bg-[#004D43] flex justify-center items-center">
          <img className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className='absolute py-1 rounded-full px-5 left-10 bottom-10 border-2'>2019-2022</button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 flex gap-5 h-[50vh]">
        <div className="card relative w-1/2 h-full rounded-xl bg-[#192826] flex justify-center items-center">
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className='absolute py-1 rounded-full px-5 left-10 bottom-10 border-2 uppercase'>Rating 5.0 on Clutch</button>
        </div>
        <div className="card relative w-1/2 h-full rounded-xl bg-[#192826] flex justify-center items-center">
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className='absolute py-1 rounded-full px-5 left-10 bottom-10 border-2 uppercase'>Business Bootcamp Alumni</button>
        </div>
      </div>
    </div>
  )
}

export default Cards