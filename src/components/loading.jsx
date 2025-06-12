import React from "react";

const LoadingScreen = ({ loading, progress }) => {
  return (
    loading && (
      <div
        className={`
          fixed inset-0 z-[9999] bg-white  transition-opacity flex
          sm:items-end sm:justify-start
          items-center justify-center
        `}
      >
        <div
          className={`
            font-bold text-gray-800 tracking-wider select-none
            sm:mb-10 sm:ml-10 sm:text-8xl sm:px-14 sm:py-10
            mb-0 mx-0 text-5xl px-8 py-6
          `}
          style={{ textShadow: "0 4px 24px #222", letterSpacing: "0.08em" }}
        >
          {progress}% <p className="font-custom text-xl"> Loading</p>
        </div>
      </div>
    )
  );
};

export default LoadingScreen;