import React from "react";

const LoadingScreen = ({ loading, progress }) => {
  return (
    loading && (
      <div
        className={`
          fixed inset-0 z-[9999] bg-black bg-opacity-90 transition-opacity flex
          sm:items-end sm:justify-start
          items-center justify-center
        `}
      >
        <div
          className={`
            font-bold text-white font-mono rounded-2xl bg-black bg-opacity-40 shadow-2xl tracking-wider select-none
            sm:mb-10 sm:ml-10 sm:text-8xl sm:px-14 sm:py-10
            mb-0 mx-0 text-5xl px-8 py-6
          `}
          style={{ textShadow: "0 4px 24px #222", letterSpacing: "0.08em" }}
        >
          {progress}%
        </div>
      </div>
    )
  );
};

export default LoadingScreen;