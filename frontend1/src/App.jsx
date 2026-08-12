import React from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import ImageCard from './components/ImageCard'
import "./App.css"
import { ArrowUpRight } from 'lucide-react';

const App = () => {
  return (
    <div className = "parent w-full h-full bg-gray-500" >
     
        <Profile />
        <Header />            
        
        <div className = "relative bg-yellow-300 flex gap-35  border-4 mt-5 h-150 p-10 border-black ">
            <div className = "bg-pink-400 border-2 border-black  ml-35 w-60 h-70 p-3 shrink-0">    
                <h1 className='text-2xl font-bold '>Prospective Customer Segmentation</h1>
                <p className='mt-3 text-sm' >Lorem ipsum dolor sit amet consectetur, . Nobis, doloribus voluptates temporibus entium quia voluptate tempora culpa ipsam alias.</p>
            </div>
              <div className='absolute left-10 top-100 '><ArrowUpRight size ={140} strokeWidth={1} /></div>
            <div className='flex gap-5 overflow-x-auto scroll-smooth hide-scrollbar' >
              <ImageCard img= "/img2.jpg" about= "Damon Targeryan -Dark sister owner and caraxes rider "/>
              <ImageCard img= "/img1.jpg" about= "Damon Targeryan -Dark sister owner and caraxes rider "/>
              <ImageCard img= "/img3.jpg" about= "Damon Targeryan -Dark sister owner and caraxes rider "/>
              <ImageCard img= "/img4.jpg" about= "Damon Targeryan -Dark sister owner and caraxes rider "/>
            </div>
        </div>     
        
    </div>
  )
}

export default App
