import React, { useState } from 'react';

// FAQ Item Component
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen); // Toggle the state to show/hide answer
  };

  return (
    <div className="FaqItem_faqItem__MIdvN border-b border-filet">
      <button
        aria-expanded={isOpen}
        onClick={toggleAnswer}
        className="flex text-left  text-white items-center justify-between w-full py-4 cursor-pointer lg:py-5"
      >
        <p className="Text_body2__bqCDe pr-4">{question}</p>
        <div className="FaqItem_faqItemIcon__Hdrl5">
          <svg
            viewBox="0 0 1024 1024"
            style={{ display: 'inline-block', stroke: 'currentcolor', fill: 'currentcolor', width: '16px', height: '16px' }}
          >
            <path d="M512.003 626.748l-297.373-297.373-45.255 45.255 342.628 342.625 342.628-342.625-45.254-45.255-297.373 297.373z"></path>
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="FaqItem_faqItemContent__KeCLt overflow-hidden text-white ">
          <p className="Text_body2__bqCDe">{answer}</p>
        </div>
      )}
    </div>
  );
};

// FAQ Section Component
const FaqSection = ({ faqs }) => {
  return (
    <div className="container flex flex-col lg:flex-row lg:gap-x-3 bg-[#10395f]  sm:py-16 lg:px-[104px]  py-[32px]  lg:py-[30px] px-8">
      <div className="w-full lg:w-5/12 lg:sticky top-0">
        <h2 className="Text_h6__RnFIb lg:max-w-lg text-white ">FAQ</h2>
      </div>
      <div className="w-full mt-10 lg:mt-0 lg:w-7/12">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
