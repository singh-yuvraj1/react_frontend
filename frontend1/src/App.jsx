import React from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import ImageCard from './components/ImageCard'
import "./App.css"
import { ArrowUpRight } from 'lucide-react';

const App = () => {
  return (
    <div className="parent w-full min-h-screen bg-slate-50 overflow-hidden">

      <Profile />

      <Header />

      <div
        className="
          relative
          flex flex-col lg:flex-row
          gap-10 lg:gap-35
          mt-5
          min-h-[850px] lg:h-[600px]
          p-6 sm:p-8 lg:p-10
          border-slate-200 border-2
          bg-slate-100
        "
      >

        {/* Certification Box */}
        <div
          className="
            relative
            border-slate-200 border-2
            rounded-none
            w-full sm:w-80 lg:w-60
            h-70
            p-5
            shrink-0
            bg-white
            shadow-sm
            mx-auto lg:mx-0
            lg:ml-35
          "
        >

          <h1 className="text-2xl font-bold text-slate-900">
            Certifications and Achievemnts
          </h1>

          <p className="mt-3 text-slate-600 leading-6">
            Showcasing my skills, continuous learning and achievements in
            technology and software development.
          </p>

        </div>

        {/* Arrow */}
        <div
          className="
            absolute
            left-2 sm:left-6
            top-[350px]
            lg:left-10
            lg:top-100
            text-indigo-500
          "
        >
          <ArrowUpRight
            size={100}
            className="sm:w-[120px] sm:h-[120px] lg:w-[140px] lg:h-[140px]"
            strokeWidth={1}
          />
        </div>

        {/* Certificate Cards */}
        <div
          className="
            flex
            gap-5
            overflow-x-auto
            scroll-smooth
            hide-scrollbar
            w-full
            pb-5
            pt-5
            lg:pt-0
          "
        >

          <ImageCard
            img="/img2.jpg"
            about="Damon Targeryan -Dark sister owner and caraxes rider"
          />

          <ImageCard
            img="/img1.jpg"
            about="Damon Targeryan -Dark sister owner and caraxes rider"
          />

          <ImageCard
            img="/img3.jpg"
            about="Damon Targeryan -Dark sister owner and caraxes rider"
          />

          <ImageCard
            img="/img4.jpg"
            about="Damon Targeryan -Dark sister owner and caraxes rider"
          />

          <ImageCard
            img="/img4.jpg"
            about="Damon Targeryan -Dark sister owner and caraxes rider"
          />

          <ImageCard
            img="/img4.jpg"
            about="Damon Targeryan -Dark sister owner and caraxes rider"
          />

          <ImageCard
            img="/img4.jpg"
            about="Damon Targeryan -Dark sister owner and caraxes rider"
          />

          <ImageCard
            img="/img4.jpg"
            about="Damon Targeryan -Dark sister owner and caraxes rider"
          />

          <ImageCard
            img="/img4.jpg"
            about="Damon Targeryan -Dark sister owner and caraxes rider"
          />

          <ImageCard
            img="/img4.jpg"
            about="Damon Targeryan -Dark sister owner and caraxes rider"
          />

          <ImageCard
            img="/img4.jpg"
            about="Damon Targeryan -Dark sister owner and caraxes rider"
          />

        </div>

      </div>

    </div>
  )
}

export default App