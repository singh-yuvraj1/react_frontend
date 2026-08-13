import React from "react";

const Header = () => {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mt-7 flex flex-wrap justify-center gap-4 px-5">

      <button
        onClick={() =>
          openLink("https://www.linkedin.com/in/yuvraj-singh2131")
        }
        className="
          h-11 w-40 rounded-2xl
          bg-slate-900 text-sm font-semibold text-white
          shadow-md
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:scale-105
          hover:bg-indigo-600
          hover:shadow-xl hover:shadow-indigo-200
          active:scale-95
        "
      >
        LinkedIn
      </button>

      <button
        onClick={() => openLink("https://github.com/singh-yuvraj1")}
        className="
          h-11 w-40 rounded-2xl
          bg-slate-900 text-sm font-semibold text-white
          shadow-md
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:scale-105
          hover:bg-indigo-600
          hover:shadow-xl hover:shadow-indigo-200
          active:scale-95
        "
      >
        GitHub
      </button>

      <button
        onClick={() => openLink("https://leetcode.com/singh-yuvraj")}
        className="
          h-11 w-40 rounded-2xl
          bg-slate-900 text-sm font-semibold text-white
          shadow-md
          transition-all duration-300 ease-out
          hover:-translate-y-1
          hover:scale-105
          hover:bg-indigo-600
          hover:shadow-xl hover:shadow-indigo-200
          active:scale-95
        "
      >
        LeetCode
      </button>

    </div>
  );
};

export default Header;