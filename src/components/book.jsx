import React, { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import customCursor from '../images/cursorbook.png';

function ExperienceBook() {
  const [cursor, setCursor] = useState('default');
  const [currentPage, setCurrentPage] = useState(0);

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
    // This would need to be implemented with the HTMLFlipBook ref
    // For now, we'll just update the current page state
    setCurrentPage(pageNum);
  };

  return (
    <div
      className="relative flex flex-col overflow-x-hidden items-center w-screen py-20 "
      style={{ cursor }}
      onMouseEnter={() => setCursor(`url('${customCursor}') 26 26, auto`)}
      onMouseLeave={() => setCursor('default')}
    >
      
      {/* Smoothly fading text */}
      <div
        className={`absolute left-[20%] top-[20%] max-w-[380px] text-white pointer-events-none transition-all duration-700 ease-in-out ${
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

        {/*Black Page */}
        <div className="bg-white p-6 rounded-[3rem] shadow-lg">
          <img
            src="/educationbook.jpg"
            alt="Education Background"
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Education */}
        <div className="bg-white p-6 rounded-[3rem]">
          <h2 className="text-xl  font-custom text-blue-700 mb-2">Education</h2>
          <p><strong>Degree:</strong> B.Tech in Electronics and Computer Engineering</p>
          <p><strong>Institution:</strong> KJ Somaiya College of Engineering, Vidyavihar</p>
          <p><strong>Duration:</strong> 2022 to 2026</p>
          <p className="mb-2"><strong>CGPA:</strong> 8.61</p>
          <hr></hr>
          <h2 className="text-xl mt-4 font-custom text-blue-700 mb-2">Honors</h2>
          <p><strong>Honors:</strong> Data Science and Analytics</p>
          <p><strong>Duration:</strong> 2023 to 2026</p>
        </div>

        {/*Black Page */}
        <div className="bg-white p-6 rounded-[3rem] shadow-lg">
          <img
            src="/internshipwork.jpg"
            alt="Education Background"
            className="w-auto h-full"
          />
        </div>

        {/* Internship: Meshcraft */}
        <div className="bg-white p-6 rounded-[3rem]">
          <h2 className="text-xl font-custom text-blue-700 mb-2">Internship: Meshcraft</h2>
          <p><strong>Role:</strong> Web Developer Lead Intern</p>
          <p><strong>Duration:</strong> Dec 2024 to Mar 2025 (Remote)</p>
          <ul className="list-disc ml-6 text-sm mt-2">
            <li>Built their website for 3D asset marketplace using React, Three.js, and React Three Fiber.</li>
            <li>Led 6+ developers, improving team efficiency by 30%.</li>
            <li>Oversaw UI/UX enhancements and agile coordination.</li>
          </ul>
          <img src="/meshcraft.jpg" alt="Meshcraft Logo" className="w-24 h-24 mt-4 " />
        </div>

        {/*Black Page */}
        <div className="bg-white p-6 rounded-[3rem] shadow-lg">
          <img
            src="/internshipwork.jpg"
            alt="Education Background"
            className="w-auto h-full"
          />
        </div>

        {/* Internship: ILegalAdvice */}
        <div className="bg-white p-6 rounded-[3rem]">
          <h2 className="text-xl font-custom text-blue-700 mb-2">Internship: ILegalAdvice</h2>
          <p><strong>Role:</strong> Full Stack Developer Intern</p>
          <p><strong>Duration:</strong> Mar – Apr 2025 (Remote)</p>
          <ul className="list-disc ml-6 text-sm mt-2">
            <li>Designed UI/UX in Figma and implemented full-stack features.</li>
            <li>Used React, Node.js, Tailwind CSS, and PostgreSQL.</li>
            <li>Integrated REST APIs for real-time legal data and insights.</li>
          </ul>
          <img src="/ilegaladvice.jpg" alt="ILegalAdvice Logo" className="w-24 h-24 mt-4 " />
        </div>

        {/*Black Page */}
        <div className="bg-white p-6 rounded-[3rem] shadow-lg">
          <img
            src="/winbook.jpg"
            alt="Education Background"
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Achievements */}
        <div className="bg-white p-6 rounded-[3rem]">
          <h2 className="text-xl font-custom text-blue-700 mb-2">Achievements</h2>
          <ul className="list-disc ml-6 text-sm">
            <li>Winner – Frontend Hackathon, Artemis (Oct 2024)</li>
            <li>Secured Bluestar scholarship (2nd year)</li>
            <li>2nd place in Indian National Talent Exam</li>
          </ul>
        </div>

        {/*Black Page */}
        <div className="bg-white p-6 rounded-[3rem] shadow-lg">
          <img
            src="/teamwork.jpg"
            alt="Education Background"
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Extracurriculars */}
        <div className="bg-white p-6 rounded-[3rem]">
          <h2 className="text-xl font-custom text-blue-700 mb-2">Extracurricular Activities</h2>
          <p><strong>BloomBox, E-Cell of KJSCE</strong></p>
          <p>Campus Company & Innovation Member (June 2023 – Apr 2024)</p>
          <ul className="list-disc ml-6 text-sm mt-2">
            <li>Organized innovation-driven events.</li>
            <li>Collaborated on startup-support workshops.</li>
          </ul>
        </div>

        {/*Black Page */}
        <div className="bg-white p-6 rounded-[3rem] shadow-lg">
          <img
            src="/fashionbook.jpg"
            alt="Education Background"
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Leadership Roles */}
        <div className="bg-white p-6 rounded-[3rem]">
          <h2 className="text-xl font-custom text-blue-700 mb-2">Leadership Roles</h2>
          <p><strong>Chief – Glitterati Fashion Show Council (KJSCE)</strong></p>
          <ul className="list-disc ml-6 text-sm mt-2">
            <li>Led event planning and execution for college fashion shows.</li>
            <li>Managed creative direction, coordination, and stage design.</li>
          </ul>
        </div>
      </HTMLFlipBook>

      {/* Enhanced Horizontal Timeline */}
      <div className="w-full max-w-5xl  mt-5 overflow-x-hidden ">
        <div className="relative">
          {/* Timeline container with improved styling */}
          <div className="bg-gradient-to-br from-[#212121] to-[#121212] rounded-2xl p-6 pt-2 shadow-2xl border border-gray-600">
            
            {/* Timeline content */}
            <div className="flex justify-between items-center relative px-0">
              {/* Timeline line with gradient */}
              <div className="absolute top-1/2 left-4 right-4 h-1 bg-gradient-to-r from-gray-600 via-blue-400 to-gray-600 rounded-full transform -translate-y-1/2"></div>
              
              {Object.entries(timelinePages).map(([item, pageNum], index) => {
                const isActive = isTimelineActive(pageNum);
                return (
                  <div 
                    key={item} 
                    className="flex flex-col items-center relative z-10"
                    onClick={() => navigateToPage(pageNum)}
                  >
                    {/* Timeline dot with enhanced styling */}
                    <div 
                      className={`relative w-4 h-4 pb-0 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 transform hover:scale-110 ${
                        isActive 
                          ? 'bg-blue-500 shadow-lg shadow-blue-500/50 ring-4 ring-blue-300/30' 
                          : 'bg-gray-500 hover:bg-gray-400 shadow-md'
                      }`}
                    >
                      {/* Pulse animation for active state */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-30"></div>
                      )}
                      
                      {/* Check icon for active state */}
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
                    
                    {/* Timeline label with improved styling */}
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
                    
                    {/* Active indicator line */}
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