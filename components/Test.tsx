import React from 'react';
import Image from 'next/image';
import c from '../images/c.png';

const DottedCircle: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
        <div className="absolute inset-0 flex items-center justify-center rounded-full border-dotted border-2 border-green-800">
          <div className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 bg-blue-500 rounded-full flex items-center justify-center">
            <Image src={c} alt="Logo" width={80} height={80} />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center text-center">
          <h3 className="text-lg font-bold">Heading</h3>
          <p className="text-sm">A little bit of content goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default DottedCircle;
