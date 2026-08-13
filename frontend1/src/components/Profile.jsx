import React from "react";

const Profile = () => {
  return (
    <div
      className="
        relative overflow-hidden
        flex flex-col items-center justify-center
        gap-4
        bg-slate-900
        px-6 py-8
        text-white
        shadow-lg
        sm:flex-row sm:gap-6
      "
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="relative">
        <img
          className="
            h-20 w-20 rounded-full
            object-cover
            border-2 border-indigo-500
            ring-4 ring-indigo-500/20
            shadow-lg shadow-indigo-900/30
            transition-all duration-500 ease-out
            hover:scale-110
            hover:rotate-3
            hover:ring-indigo-400/40
          "
          src="/img1.jpg"
          alt="Yuvraj Singh"
        />
      </div>

      <div className="relative text-center sm:text-left">
        <h1 className="text-2xl font-bold tracking-wide">
          Yuvraj Singh
        </h1>

        <h2 className="mt-1 text-sm text-slate-300 sm:text-base">
          Full Stack MERN Developer{" "}
          <span className="mx-1 text-indigo-400">/</span>{" "}
          Python Developer
        </h2>
      </div>
    </div>
  );
};

export default Profile;