import React, { useState } from 'react';

interface FaqItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
  }
  

  export const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onToggle }) => {
    return (
      <li className="bg-white border-b shadow-lg decoration-transparent">
        <h2
          onClick={onToggle}
          className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
        >
          <span>{question}</span>
          <svg
            className={`fill-current text-mx-blue-600 h-6 w-6 transform transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0   0   20   20"
          >
            <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
          </svg>
        </h2>
        <div
          className={`border-l-2 border-mx-blue-600 overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-64' : 'max-h-0'}`}
        >
          <p className="p-3 text-gray-900">{answer}</p>
        </div>
      </li>
    );
  };



interface FaqItemData {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItemData[];
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); // Fecha o item se ele já estiver aberto
    } else {
      setOpenIndex(index); // Abre o novo item e fecha qualquer outro aberto
    }
  };

  return (
    <ul className="flex flex-col rounded-lg">
      {items.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </ul>
  );
};