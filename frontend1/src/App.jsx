import React from 'react'
import Header from './components/Header'
import Profile from './components/Profile'

const App = () => {
  return (
    <div className = "parent w-full h-full bg-gray-500" >
      <Header />
      <Profile />
  


        <div className = " bg-blue-300 items-center p-10 "> 
            
              
              <div className = "bg-yellow-300 border-4 mt-10 h-150 border-black flex">
                  <div className = "bg-pink-400 border-2 border-black ml-35 mt-10 w-60 h-105 p-10">
                      <h1 className='text-2xl font-bold '>Prospective Customer Segmentation</h1>
                      <p className='mt-5'>Lorem ipsum dolor sit amet consectetur, . Nobis, doloribus voluptates temporibus entium quia voluptate tempora culpa ipsam alias.</p>
                  </div>
                  <div className = "flex justify-between bg-green-300 items-center ml-20 mt-10  h-105 w-250 ">
                    <div className ="relative h-105 w-70 ">
                      <img className=' h-full w-full object-cover' src="/img2.jpg" alt="img2" />

                        <div className='absolute inset-0 bg-black/40 '>
                            <div className='absolute bottom-10 left-5 text-white'>
                              <p className='mt-2 ml-5 '>Damon Targeryan -Dark sister owner and caraxes rider </p>
                              <button className='bg-gray-600 text-white mt-5 h-8 w-40 rounded-4xl '>Learn More</button>
                            </div>
                        </div>
                    </div>
                  </div>

              </div>
        </div>
    </div>
  )
}

export default App
