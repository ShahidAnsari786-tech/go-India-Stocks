'use client';

import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { SidebarLink } from '.';

const Dropdown = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className='flex items-center justify-between w-full gap-1 p-3 px-4 text-white/80 bg-inherit hover:text-white hover:bg-accent-hover'
      >
        {title}
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>

      <div className='links' style={{ display: isOpen ? 'block' : 'none' }}>
        {/* Render SidebarLink components with provided href links */}
        {links.map((link, index) => (
          <SidebarLink key={index} href={link}>
            {link}
          </SidebarLink>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
