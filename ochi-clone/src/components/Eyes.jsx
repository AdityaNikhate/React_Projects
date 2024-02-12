import React, { useEffect, useState } from 'react'

const Eyes = () => {
  const [angle1, setAngle1] = useState(0)
  useEffect(()=>{
    window.addEventListener('mousemove', (e)=>{
      // console.log(e.clientX);
      // console.log(e.clientY); 
      let mouseX = e.clientX, mouseY = e.clientY;

      // find the screen center
      let deltaX = mouseX- window.innerWidth/2;
      let deltaY = mouseY- window.innerHeight/2

      var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI)
      console.log(angle)
      setAngle1(angle-180)
    })
  })

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div  data-scroll data-scroll-speed='-.7'className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className='absolute flex gap-10 justify-between top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          <div className='w-[14vw] h-[14vw] bg-white rounded-full flex items-center justify-center'>
          <div className='w-[8vw] h-[8vw] relative bg-black rounded-full '>
          <div style={{transform:`translate(-50%,-50%) rotate(${angle1}deg)`}} className='line w-full h-5 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
            <div className='w-5 h-5 rounded-full bg-white'></div>
            </div>
          </div>
          </div>
          
          <div className='w-[14vw] h-[14vw] bg-white rounded-full flex items-center justify-center'>
          <div className='w-[8vw] h-[8vw] relative bg-black rounded-full '>
          <div style={{transform:`translate(-50%,-50%) rotate(${angle1}deg)`}} className='line w-full h-5 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
            <div className='w-5 h-5 rounded-full bg-white'></div>
            </div>
          </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Eyes