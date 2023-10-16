"use client"
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Image from 'next/image';
import a1 from '../images/a1.png';
import play from '../images/play.png';

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const faqData = [
    {
      question: 'What is the purpose of this FAQ accordion?',
      answer: 'The purpose is to demonstrate a responsive FAQ accordion using Next.js and Tailwind CSS.',
      pic: a1,
      bg: 'bg-yellow-600',
      logo: 'bg-yellow-600',
    },
    {
      question: 'How can I use this accordion in my project?',
      answer: 'You can import the AccordionItem component and use it in your project. Customize the data and styling as needed.',
      pic: a1,
      bg: 'bg-red-500',
      logo: 'bg-yellow-600',
    },
    {
      question: 'How can I use this accordion in my project?',
      answer: 'You can import the AccordionItem component and use it in your project. Customize the data and styling as needed.',
      pic: a1,
      bg: 'bg-red-500',
      logo: 'bg-yellow-600',
    },
    {
      question: 'How can I use this accordion in my project?',
      answer: 'You can import the AccordionItem component and use it in your project. Customize the data and styling as needed.',
      pic: a1,
      bg: 'bg-red-500',
      logo: 'bg-yellow-600',
    },
    // Add more FAQ items as needed
  ];

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-col lg:flex-row w-full mt-9'>
      <div className="relative bg-slate-800 py-10 lg:w-1/2 mx-2">
        <div className="mx-auto">
          <div className="mb-20 mt-20 px-6">
            <h3 className="text-lg">Our Program</h3>
            <h1 className="text-4xl mb-4  text-white">Smarty Programs</h1>
            <p className="text-base mr-4 text-white">
              Dear parents, we would like to thank you for choosing the Kindori Preschool System in the process of considering and planning your children`s...
            </p>
          </div>
        </div>
        <div className="mx-auto relative bg-white rounded-2xl mr-3 z-10">
          {faqData.map((item, index) => (
            <div key={index} className="">
              <div className="flex justify-start items-center p-3 cursor-pointer  border-b-2" onClick={toggleAccordion}>
                <div className="bg-red-500 p-2 rounded-full">
                  <Image src={item.pic} alt="img" width={32} height={32} />
                </div>
                <div className="font-bold ml-3 font-serif">{item.question}</div>
                <div className="flex-grow" />
                <div className={`text-white p-2 rounded-full ${item.bg}`}>
                  {isOpen ? <FaMinus /> : <FaPlus />}
                </div>
              </div>
              <div className={isOpen ? 'block p-4' : 'hidden'}>
                <div className="text-gray-700 font-serif">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center items-center lg:w-1/2'>
        <div className='w-3/4'>
          <Image src={play} alt='play' />
        </div>
      </div>
    </div>
  );
};
export default Accordion;
