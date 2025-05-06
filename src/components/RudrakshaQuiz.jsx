import React, { useState, useEffect, useRef } from 'react';

export default function RudrakshaQuiz() {
  const fullText = "Take the Rudraksh Quiz!";
  const [displayedText, setDisplayedText] = useState("");
  const [visible, setVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    // Show full text after 1 second delay
    const textTimeout = setTimeout(() => {
      setDisplayedText(fullText);
      setTextVisible(true);
    }, 3000); // after image animation duration (3s)
    // Show button after text animation duration (1s)
    const buttonTimeout = setTimeout(() => {
      setButtonVisible(true);
    }, 4000);
    return () => {
      clearTimeout(textTimeout);
      clearTimeout(buttonTimeout);
    };
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className="relative text-black font-serif h-[450px] flex flex-col justify-center items-center px-0 py-0 mt-10 overflow-hidden bg-white"
    >
      <img
        src="/free-photo-of-snow-in-mountains.jpeg"
        alt="Quiz Image"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-[2200ms] ease-out ${
          visible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}
        style={{
          maskImage: 'linear-gradient(to top, transparent 0%, black 60%, black 40%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 60%, black 40%, transparent 100%)',
          zIndex: 0,
        }}
      />
      <h1
        className="relative z-10 text-4xl font-bold"
        style={{
          transform: textVisible ? 'translateY(0)' : 'translateY(-50px)',
          opacity: textVisible ? 1 : 0,
          transition: 'transform 1s ease, opacity 1s ease',
        }}
      >
        {displayedText}
      </h1>
      <button
        className="relative z-10 px-6 py-3 bg-indigo-700 text-white rounded-full shadow-lg hover:bg-indigo-800 transition mt-4"
        style={{
          transform: buttonVisible ? 'translateY(0)' : 'translateY(50px)',
          opacity: buttonVisible ? 1 : 0,
          transition: 'transform 1s ease, opacity 1s ease',
        }}
      >
        Start Quiz
      </button>
    </section>
  );
}

