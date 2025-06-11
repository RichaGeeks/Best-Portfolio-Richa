import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqRefs = useRef([]);
  const sectionRef = useRef(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Why should you hire her?",
      answer: "Because she's a blend of technical expertise, soft skills, and a positive attitude ready to contribute meaningfully to your team.",
    },
    {
      question: "Can she adapt to new environments?",
      answer: "Like a chameleon! Except she's more into blending ideas than colors.",
    },
    {
      question: "Does she survive on coffee?",
      answer: "Surprisingly, no! A good playlist is her fuel of choice.",
    },
    {
      question: "What is the quote that she lives by?",
      answer: "You can be anything, You can be infinite amout of things people are!"
    },
    {
      question: "Does she have pets?",
      answer: "All cool humans do. (This answer brought to you by Cat GPT) "
    },
  ];

  // Add FAQ ref to the array
  const addToRefs = (el, index) => {
    if (el && !faqRefs.current.includes(el)) {
      faqRefs.current[index] = el;
    }
  };

  useEffect(() => {
      // Set initial positions (alternating sides)
      faqRefs.current.forEach((el, index) => {
        if (el) {
          gsap.set(el, {
            x: index % 2 === 0 ? '-100%' : '100%',
            opacity: 0
          });
        }
      });

      // Create animations for each FAQ
      faqRefs.current.forEach((el, index) => {
        if (el) {
          const animation = gsap.fromTo(el,
            {
              x: index % 2 === 0 ? '-100%' : '100%',
              opacity: 0
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                end: "top 20%",
                toggleActions: "play none reverse none", // play forward, none, reverse backward, none
                // markers: true // Uncomment for debugging
              }
            }
          );

          // Reset position when scroll trigger is refreshed
          ScrollTrigger.addEventListener("refreshInit", () => {
            gsap.set(el, {
              x: index % 2 === 0 ? '-100%' : '100%',
              opacity: 0
            });
          });
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach(instance => instance.kill());
        ScrollTrigger.removeEventListener("refreshInit");
      };
   }, []);

  return (
    <section ref={sectionRef} className="relative py-10 z-20 bg-[#c4c2bc] sm:py-16 lg:py-24 overflow-hidden">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-custom leading-tight text-[#0e12eb] sm:text-5xl lg:text-7xl">
            Not So Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqData.map((faq, index) => (
            <div 
              ref={el => addToRefs(el, index)}
              className="relative group cursor-pointer"
              key={index}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#7cfce3] via-[#0e12eb] to-[#000] rounded-lg blur opacity-25 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative transition-all duration-200 border border-[#0e12eb] shadow-lg rounded-lg">
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6 sm:py-12"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-xl font-semibold text-[#0e12eb]">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-[#0e12eb] transform ${
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
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6 text-[#0e12eb]">
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