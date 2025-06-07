import React, { useState } from "react";
//white #F4F4F4,purple #7659EA,cyan #7cfce3,black #121111 #212121,orange #F4511E

const Quotes = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      {/*<h2 className="text-3xl md:text-4xl font-plaster text-[#212121] bg-black flex justify-center pt-12">
        Quotes that I live by/ Hackathons
      </h2>*/}
      <div className="flex justify-center items-center w-full h-[100px] bg-#121111 shadow-lg">
        <div className="p-6"> Logo
        </div>
        <div className="flex w-[92vw] h-[80px]">
          {/* Feature 1 */}
          <div
            className={`relative min-w-[60px] overflow-hidden m-2 bg-opacity-40 bg-[#2b2b36] bg-cover bg-center rounded-[50px] shadow-lg cursor-pointer transition-all duration-100 ease-in-out ${
              activeIndex === 0
                ? "flex-grow-[10] bg-[auto_100%]"
                : "flex-grow bg-[auto_150%]"
            }`}
            onMouseEnter={() => setActiveIndex(0)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div
              className={`absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 p-4 rounded-[50px] opacity-0 transition-opacity duration-100 ease-in-out ${
                activeIndex === 0 ? "opacity-100" : ""
              }`}
            >
              <h3 className="text-lg md:text-xl font-bold">Quote</h3>
              <p className="text-sm md:text-base mt-2 text-center">
                Brief description of the first feature, highlighting the key
                benefit or solution.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div
            className={`relative min-w-[60px] overflow-hidden m-2 bg-opacity-40 bg-[#2b2b36] bg-cover bg-center rounded-[50px] shadow-lg cursor-pointer transition-all duration-100 ease-in-out ${
              activeIndex === 1
                ? "flex-grow-[10] bg-[auto_100%]"
                : "flex-grow bg-[auto_150%]"
            }`}
            onMouseEnter={() => setActiveIndex(1)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div
              className={`absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 p-4 rounded-[50px] opacity-0 transition-opacity duration-100 ease-in-out ${
                activeIndex === 1 ? "opacity-100" : ""
              }`}
            >
              <h3 className="text-lg md:text-xl font-bold">Quote</h3>
              <p className="text-sm md:text-base mt-2 text-center">
                Explanation of the second feature that distinguishes your
                product or service.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div
            className={`relative min-w-[60px] overflow-hidden m-2 bg-opacity-40 bg-[#2b2b36] bg-cover bg-center rounded-[50px] shadow-lg cursor-pointer transition-all duration-100 ease-in-out ${
              activeIndex === 2
                ? "flex-grow-[10] bg-[auto_100%]"
                : "flex-grow bg-[auto_150%]"
            }`}
            onMouseEnter={() => setActiveIndex(2)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div
              className={`absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 p-4 rounded-[50px] opacity-0 transition-opacity duration-100 ease-in-out ${
                activeIndex === 2 ? "opacity-100" : ""
              }`}
            >
              <h3 className="text-lg md:text-xl font-bold">Quote</h3>
              <p className="text-sm md:text-base mt-2 text-center">
                Highlight the value proposition of this feature and its impact
                on the user.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div
            className={`relative min-w-[60px] overflow-hidden m-2 bg-opacity-40 bg-[#2b2b36] bg-cover bg-center rounded-[50px] shadow-lg cursor-pointer transition-all duration-100 ease-in-out ${
              activeIndex === 3
                ? "flex-grow-[10] bg-[auto_100%]"
                : "flex-grow bg-[auto_150%]"
            }`}
            onMouseEnter={() => setActiveIndex(3)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div
              className={`absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 p-4 rounded-[50px] opacity-0 transition-opacity duration-100 ease-in-out ${
                activeIndex === 3 ? "opacity-100" : ""
              }`}
            >
              <h3 className="text-lg md:text-xl font-bold">Quote</h3>
              <p className="text-sm md:text-base mt-2 text-center">
                Highlight the value proposition of this feature and its impact
                on the user.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div
            className={`relative min-w-[60px] overflow-hidden m-2 bg-opacity-40 bg-[#2b2b36] bg-cover bg-center rounded-[50px] shadow-lg cursor-pointer transition-all duration-100 ease-in-out ${
              activeIndex === 4
                ? "flex-grow-[10] bg-[auto_100%]"
                : "flex-grow bg-[auto_150%]"
            }`}
            onMouseEnter={() => setActiveIndex(4)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div
              className={`absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 p-4 rounded-[50px] opacity-0 transition-opacity duration-100 ease-in-out ${
                activeIndex === 4 ? "opacity-100" : ""
              }`}
            >
              <h3 className="text-lg md:text-xl font-bold">Quote</h3>
              <p className="text-sm md:text-base mt-2 text-center">
                Explanation of the fourth feature for example animation.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quotes;
