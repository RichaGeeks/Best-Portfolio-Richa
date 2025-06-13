// components/loading.jsx
import React from "react";

const LoadingScreen = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center">
      <div className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-[#0e12eb] to-[#989b9c] md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full">
        <div className="rounded-full h-full w-full bg-white backdrop-blur-md" />
      </div>
      <div className="pt-16 font-custom drop-shadow-2xl  text-[#0e12eb] text-2xl"> Good Things Take Time</div>
    </div>
  );
};

export default LoadingScreen;
