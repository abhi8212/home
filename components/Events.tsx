import React from 'react';

const Events = () => {
  return (
    <div className="relative h-screen bg-center bg-cover event-img flex justify-center items-center">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full mb-4">
            Button
          </button>
          <h1 className="text-3xl md:text-3xl font-bold mb-6 my-4">
            ORGANIZE HALLOWEEN PARTIES FOR KIDS
          </h1>
          <div className="flex flex-wrap justify-center space-x-4">
            <div className="w-32 h-32 border-gray-500 border-8 mb-4"></div>
            <div className="w-32 h-32 border-gray-500 border-8 mb-4"></div>
            <div className="w-32 h-32 border-gray-500 border-8 mb-4"></div>
            <div className="w-32 h-32 border-gray-500 border-8 mb-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
