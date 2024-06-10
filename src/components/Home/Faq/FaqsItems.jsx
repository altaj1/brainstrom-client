import { useState } from "react";


const FaqsItems = ({data}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
             <div className="border-b border-gray-200">
        <button
          className="flex items-center justify-between w-full py-4 text-left focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-xl font-medium ">{data.question}</p>
          <svg
            className={`w-6 h-6 transition-transform transform ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
               d='M19 9l-7 7-7-7'
            //   d={isOpen ? 'M5 15l7-7 7 7' :  'M19 9l-7 7-7-7'}
            />
          </svg>
        </button>
        {isOpen && <p className="mt-2 ">{data.answer}</p>}
      </div>
        </div>
    );
};

export default FaqsItems;