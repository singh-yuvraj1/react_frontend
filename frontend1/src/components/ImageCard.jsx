import React from "react";

const ImageCard = ({ img, about }) => {
  return (
    <div
  className="
    group relative
    h-[420px] w-[280px]
    shrink-0 overflow-hidden
    rounded-3xl
    bg-slate-900
    shadow-lg
    transition-all duration-500 ease-out
    hover:-translate-y-2
    hover:scale-[1.02]
    hover:shadow-2xl
    hover:shadow-indigo-200/40
  "
>
      {/* Image */}
      <img
        className="
          h-full w-full object-cover
          transition-transform duration-700 ease-out
          group-hover:scale-110
        "
        src={img}
        alt="Certificate"
      />

      {/* Gradient Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-slate-950/95
          via-slate-950/40
          to-transparent
        "
      />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">

        <div className="mb-3 h-1 w-10 rounded-full bg-indigo-500 transition-all duration-300 group-hover:w-16" />

        <p className="text-sm font-medium leading-6 text-slate-200">
          {about}
        </p>

        <button
          className="
            mt-5 h-10 w-36 rounded-2xl
            bg-indigo-600
            text-sm font-semibold text-white
            shadow-md
            transition-all duration-300 ease-out
            hover:bg-indigo-500
            hover:scale-105
            hover:shadow-lg hover:shadow-indigo-500/30
            active:scale-95
          "
        >
          Verify
        </button>

      </div>
    </div>
  );
};

export default ImageCard;