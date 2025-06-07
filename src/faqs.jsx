import React, { useState } from 'react';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Why should you hire her?",
      answer: "Because she’s a blend of technical expertise, soft skills, and a positive attitude—ready to contribute meaningfully to your team.",
    },
    {
      question: "Can she adapt to new environments?",
      answer: "Like a chameleon! Except she’s more into blending ideas than colors.",
    },
    {
      question: "Does she survive on coffee?",
      answer: "Surprisingly, no! A good playlist is her fuel of choice.",
    },
    {
      question: "How does she manage deadlines?",
      answer: "By staying organized, prioritizing tasks, and using productivity tools to ensure every project is completed on time.",
    },
    {
      question: "Is she the best intern to have?",
      answer: "Yes! With a strong mix of technical skills, creativity, and adaptability, she's a perfect fit for any team.",
    },
    {
      question:"What is the quote that she lives by?",
      answer:""
    },
    {
      question:"Does she have pets?",
      answer:""
    },
    {
      question:"What are her hobbies?",
      answer:"Exploring tech, experimenting with Web designs, binge watching thriller shows, conquering sudoku puzzles, running, and drawing!"
    }
  ];

  return (
    <section className="py-10 bg-[#121111] sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#7cfce3] sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqData.map((faq, index) => (
            <div className="relative group cursor-pointer" key={index}>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#7cfce3] via-[#7659EA] to-[#F4511E] rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative transition-all duration-200 bg-[#121111] border border-gray-200 shadow-lg rounded-lg">
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-[#F4F4F4]">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-[#7cfce3] transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-max-height duration-300 ${
                    activeIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6 text-[#7cfce3]">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
