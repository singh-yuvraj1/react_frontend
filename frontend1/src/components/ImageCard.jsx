import React from 'react'

const ImageCard = ({img,about}) => {
  return (

  
        <div className ="relative h-105 w-70 shrink-0 ">
          <img className=' h-full w-full object-cover' src={img} alt="img2" />

              <div className='absolute inset-0 bg-black/40 '>
                  <div className='absolute bottom-10 left-5 text-white'>
                    <p className='mt-2  '>{about}</p>
                    <button className='bg-gray-600 text-white mt-5 h-8 w-40 rounded-4xl '>Learn More</button>
                  </div>
              </div>
        </div>


  )
}

export default ImageCard
