'use client'
import React, { useEffect, useRef } from 'react';
import featuredCompanies from '@/content/featured-companies';
import Image from 'next/image';

const FeaturedCompanies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Clone the images and append them to the end of the container
    const cloneImages = () => {
      const images = container.querySelectorAll('a');
      images.forEach((image) => {
        container.appendChild(image.cloneNode(true));
      });
    };

    // Start cloning images when component mounts
    cloneImages();

    // Scroll animation
    const scrollAnimation = () => {
      container.scrollLeft += 2; // Adjust the scroll speed as needed
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0; // Reset scroll position to create continuous scrolling effect
      }
    };

    // Start the scroll animation
    const scrollInterval = setInterval(scrollAnimation, 50); // Adjust the interval as needed

    // Clean up the interval on component unmount
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className='w-screen bg-blue-100'>
       
      <div ref={containerRef} className='flex items-center gap-10 p-2 px-3 border-b border-indigo-500 bg-white overflow-hidden'>
        {featuredCompanies.map(({ name, img, url }) => (
          
          <a key={img} href={url} className="flex-shrink-0">
            <div className="absolute top-20 left-0 h-full w-0.5 opacity-5 bg-accent"></div>
            <Image
              src={img}
              alt={name}
              width={150}
              height={100}
              className='aspect-[3/1] min-w-[100px] object-cover mix-blend-multiply'
            />
            <div className="absolute top-20 right-0 h-full w-0.5 opacity-5 bg-accent"></div>
          </a>
          
        ))}
      </div>
    </section>
  );
};

export default FeaturedCompanies;
