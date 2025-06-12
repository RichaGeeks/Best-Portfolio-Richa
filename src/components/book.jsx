import React, { useState, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import customCursor from '../images/cursorbook.png';

function ExperienceBook() {
  const [cursor, setCursor] = useState('default');
  const [currentPage, setCurrentPage] = useState(0);
  const bookRef = useRef();

  const handleFlip = (e) => {
    setCurrentPage(e.data);
  };

  // Map of timeline items to their corresponding page numbers
  const timelinePages = {
    'Education': 1, // Page index 2 (third page)
    'Internship: Meshcraft': 3,
    'Internship: IlegalAdvice': 5,
    'Achievement': 7,
    'Extracurricular': 9,
    'Leadership Role': 11
  };

  // Function to check if a timeline item should be highlighted
  const isTimelineActive = (pageNum) => {
    return currentPage === pageNum;
  };

  // Function to navigate to specific page
  const navigateToPage = (pageNum) => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flip(pageNum);
    }
    setCurrentPage(pageNum);
  };

  // Helper for full-page image style
  const fullPageImageStyle = "absolute inset-0 w-full h-full object-cover rounded-[3rem]";

  return (
    <div
      className="relative flex flex-col overflow-x-hidden items-center w-screen py-20 "
      style={{ cursor }}
      onMouseEnter={() => setCursor(`url('${customCursor}') 26 26, auto`)}
      onMouseLeave={() => setCursor('default')}
    >
      <h2 className="font-custom text-[#fcf9ed] text-[3rem] animate-pulse  block sm:hidden">Open the Book</h2>
      {/* Smoothly fading text */}
      <div
        className={`absolute left-[20%] top-[20%] max-w-[380px] text-white pointer-events-none transition-all duration-700 ease-in-out hidden md:block ${
          currentPage === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <h2 className="font-custom text-[#fcf9ed] text-[3rem] animate-pulse">Open the Book</h2>
        <p className="mt-4">Explore my experiences, challenges, and achievements in the tech world.</p>
        <p className="mt-8 mb-4 text-sm text-gray-300">Get to know about my</p>
        <ul className="w-34 text-md  text-gray-200 bg-[#141417] border border-gray-500 rounded-lg">
          <li className="px-4 py-2 border-b border-gray-500 rounded-t-lg">Education</li>
          <li className="px-4 py-2 border-b border-gray-500">Internships</li>
          <li className="px-4 py-2 border-b border-gray-500">Achievements</li>
          <li className="px-4 py-2 rounded-b-lg">Voluntary Work</li>
        </ul>
      </div>

      <HTMLFlipBook
        ref={bookRef}
        width={400}
        height={480}
        size="fixed"
        maxShadowOpacity={0.5}
        showCover={true}
        style={{ borderRadius: '3rem', overflow: 'visible', cursor }}
        onFlip={handleFlip}
      >
        {/* Cover Page */}
        <div className="relative flex items-center justify-center w-full h-full rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#0e12eb] to-[#989b9c]">
          <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-md rounded-[3rem]" />
          <div className="relative z-10 text-center p-6 pt-12">
            <h1 className="text-white text-4xl font-custom drop-shadow-md">
              The Journey So Far
            </h1>
            <p className="text-white text-sm mt-2 opacity-80">
              Every step forward, one story at a time.
            </p>
          </div>
        </div>

        {/* Full-page Image: Education */}
        <div className="relative w-full h-full bg-blue-700 rounded-[3rem] overflow-hidden">
          <img
            src="/bookcover/book1.png"
            alt="Education Background"
            className={fullPageImageStyle}
          />
        </div>

        {/* Education */}
        <div className="bg-blue-700 pt-10 text-yellow-100 p-6 rounded-[3rem]">
          <h2 className="text-2xl  font-custom   mb-2">Education</h2>
          <p className="text-md "><span className="font-custom text-lg text-stone-900">Degree </span>: B.Tech in Electronics and Computer Engineering</p>
          <p className="text-md "><span className="font-custom text-lg text-stone-900 ">Institution</span>: KJ Somaiya College of Engineering, Vidyavihar</p>
          <p className="text-md "><span className="font-custom text-lg text-stone-900">Duration </span>: 2022 to 2026</p>
          <p className="text-md pb-6"><span className="font-custom text-lg text-stone-900">CGPA </span>: 8.61</p>
          <hr></hr>
          <h2 className="text-2xl mt-4 font-custom text-yellow-100 mb-2">Honors</h2>
          <p className="text-md "><span className="font-custom text-lg text-stone-900">Honors </span>: Data Science and Analytics</p>
          <p className="text-md "><span className="font-custom text-lg text-stone-900">Duration </span>: 2023 to 2026</p>
        </div>

        {/* Full-page Image: Internship/Work */}
        <div className="relative w-full h-full bg-black rounded-[3rem] overflow-hidden">
          <img
            src="/bookcover/book2.png"
            alt="Internship Work"
            className={fullPageImageStyle}
          />
        </div>

        {/* Internship Meshcraft */}
        <div className="bg-blue-700 text-yellow-100 pt-10 p-6 rounded-[3rem]">
          <h2 className="text-2xl font-custom  mb-2">Internship Meshcraft</h2>
          <p className="text-md "><span className="font-custom text-lg text-stone-900">Role </span>: Web Developer Lead Intern</p>
          <p className="text-md "><span className="font-custom text-lg text-stone-900">Duration </span>: Dec 2024 to Mar 2025 (Remote)</p>
          <ul className="list-disc ml-6 text-sm mt-2">
            <li>Built their website for 3D asset marketplace using React, Three.js, and React Three Fiber.</li>
            <li>Led 6+ developers, improving team efficiency by 30%.</li>
            <li>Oversaw UI/UX enhancements and agile coordination.</li>
          </ul>
          <img src="/internshipimg/meshcraft.png" alt="Meshcraft Logo" className="h-30  mt-2 rounded-3xl" />
        </div>

        {/* Full-page Image: Internship/Work */}
        <div className="relative w-full h-full bg-black rounded-[3rem] overflow-hidden">
          <img
            src="/bookcover/book3.png"
            alt="Internship Work"
            className={fullPageImageStyle}
          />
        </div>

        {/* Internship: ILegalAdvice */}
        <div className="bg-blue-700 text-yellow-100 pt-10 p-6 rounded-[3rem]">
          <h2 className="text-2xl font-custom mb-2">Internship ILegalAdvice</h2>
          <p className="text-md "><span className="font-custom text-lg text-stone-900">Role </span>: Full Stack Developer Intern</p>
          <p className="text-md "><span className="font-custom text-lg text-stone-900">Duration </span>: Mar 2025 to Apr 2025 (Remote)</p>
          <ul className="list-disc ml-6 text-sm mt-2">
            <li>Designed UI/UX in Figma and implemented full-stack features.</li>
            <li>Used React, Node.js, Tailwind CSS, and PostgreSQL.</li>
            <li>Integrated REST APIs for real-time legal data and insights.</li>
          </ul>
          <img src="/internshipimg/ilegal.png" alt="ILegalAdvice Logo" className="h-30  mt-2 rounded-3xl " />
        </div>

        {/* Full-page Image: Winbook */}
        <div className="relative w-full h-full bg-black rounded-[3rem] overflow-hidden">
          <img
            src="/bookcover/book4.png"
            alt="Winning"
            className={fullPageImageStyle}
          />
        </div>

        {/* Achievements */}
        <div className="bg-blue-700 text-yellow-100 pt-10 p-6 rounded-[3rem]">
          <h2 className="text-2xl font-custom mb-2">Achievements</h2>
          <ul className="list-disc ml-6 text-lg">
            <li>Winner of a Frontend Hackathon, Artemis (Oct 2024)</li>
              <img src="/internshipimg/hackathonfront.jpg" alt="certificate Logo" className="h-30  mt-2 mb-4 rounded-3xl " />
              <hr></hr>
            <li className="mt-2">Secured Bluestar scholarship (2nd year)</li>
          </ul>
        </div>

        {/* Full-page Image: Teamwork */}
        <div className="relative w-full h-full bg-black rounded-[3rem] overflow-hidden">
          <img
            src="/bookcover/book5.png"
            alt="Teamwork"
            className={fullPageImageStyle}
          />
        </div>

        {/* Extracurriculars */}
        <div className="bg-blue-700 text-yellow-100 pt-10 p-6 rounded-[3rem]">
          <h2 className="text-2xl font-custom  mb-2">Extracurricular Activities</h2>
          <p className="text-md "><span className="font-custom text-lg text-stone-900">BloomBox Entrepreneurship Cell of KJSCE</span></p>
          <p>Campus Company & Innovation Member (June 2023 to Apr 2024)</p>
          <ul className="list-disc ml-6 text-sm mt-2">
            <li>Organized innovation-driven events.</li>
            <li>Collaborated on startup-support workshops.</li>
          </ul>
          <img src="/internshipimg/bloombox.jpg" alt="BloomBox Logo" className="h-30  mt-2 rounded-3xl " />
        </div>

        {/* Full-page Image: Fashionbook */}
        <div className="relative w-full h-full bg-black rounded-[3rem] overflow-hidden">
          <img
            src="/bookcover/book6.png"
            alt="Fashion"
            className={fullPageImageStyle}
          />
        </div>

        {/* Leadership Roles */}
        <div className="bg-blue-700 p-6 text-yellow-100 pt-10 rounded-[3rem]">
          <h2 className="text-2xl font-custom mb-2">Leadership Roles</h2>
          <p><strong>Chief of Glitterati Fashion Show Council (KJSCE)</strong></p>
          <ul className="list-disc ml-6 text-sm mt-2">
            <li>Led event planning and execution for college fashion shows.</li>
            <li>Managed creative direction, coordination, and stage design.</li>
          </ul>
          <img src="/internshipimg/glitterati.jpg" alt="Glitterati Logo" className="h-30  mt-2 rounded-3xl " />
        </div>
      </HTMLFlipBook>

      {/* Enhanced Horizontal Timeline */}
      <div className="w-screen max-w-5xl hidden md:block   mt-5 overflow-x-hidden sm:visible ">
        <div className="relative">
          {/* Timeline container with improved styling */}
          <div className="bg-gradient-to-br from-[#212121] to-[#121212] rounded-2xl p-6 pt-2 shadow-2xl border border-gray-600">
            <div className="flex justify-between items-center relative px-0">
              <div className="absolute top-1/2 left-4 right-4 h-1 bg-gradient-to-r from-gray-600 via-blue-400 to-gray-600 rounded-full transform -translate-y-1/2"></div>
              {Object.entries(timelinePages).map(([item, pageNum], index) => {
                const isActive = isTimelineActive(pageNum);
                return (
                  <div 
                    key={item} 
                    className="flex flex-col items-center relative z-10"
                    onClick={() => navigateToPage(pageNum)}
                  >
                    <div 
                      className={`relative w-4 h-4 pb-0 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 transform hover:scale-110 ${
                        isActive 
                          ? 'bg-blue-500 shadow-lg shadow-blue-500/50 ring-4 ring-blue-300/30' 
                          : 'bg-gray-500 hover:bg-gray-400 shadow-md'
                      }`}
                    >
                      {isActive && (
                        <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-30"></div>
                      )}
                      {isActive ? (
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 20 20" 
                          fill="currentColor" 
                          className="w-4 h-4 text-white relative z-10"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                      ) : (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      )}
                    </div>
                    <div 
                      className={`mt-4 text-xs text-center px-3 py-0 rounded-lg cursor-pointer transition-all duration-300 max-w-[120px] ${
                        isActive 
                          ? 'text-blue-300 font-semibold bg-blue-900/50 border border-blue-500/30 shadow-lg' 
                          : 'text-gray-300 hover:text-white hover:bg-gray-700/50 border border-transparent'
                      }`}
                    >
                      <div className="leading-tight pt-2">
                        {item.split(': ').map((part, i) => (
                          <div key={i} className={i === 0 ? 'font-medium' : 'font-normal opacity-80'}>
                            {part}
                          </div>
                        ))}
                      </div>
                    </div>
                    {isActive && (
                      <div className="absolute -bottom-2 w-1 h-8 bg-gradient-to-b from-blue-500 to-transparent rounded-full"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceBook;