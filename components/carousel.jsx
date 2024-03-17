"use client"
import React, { useState } from 'react';
import './Carousel.css'; // Make sure to create this CSS file

const Carousel = ({ items }) => {
   
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstItem = currentIndex === 0;
    const newIndex = isFirstItem ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastItem = currentIndex === items.length - 1;
    const newIndex = isLastItem ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  console.log(items, 'items');

  return (
    <div className="carousel h-[400px]">
      <button onClick={goToPrevious} className="prev border-[1px] border-[#1AABF4] shadow-md w-[70px] h-[60px] rounded-[20px]">&#10094;</button>
      <div className="carousel-track-container h-full">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item ${index === currentIndex ? 'active' : ''} ${index === currentIndex - 1 ? 'prev' : ''} ${index === currentIndex + 1 ? 'next' : ''}`}
          >
            <img src={item.img}  className='w-[50px] h-[50px] rounded-full' alt={item.title} />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <button onClick={goToNext} className="next shadow-md w-[70px] border-[1px] border-[#1AABF4] h-[60px] rounded-[20px]">&#10095;</button>
    </div>
  );
};

export default Carousel;
