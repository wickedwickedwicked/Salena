

import React, { useState } from 'react';
import { FaGripLines } from 'react-icons/fa';
import { Link } from 'react-router-dom'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex items-center justify-between p-4 text-white'>
      <Link to="/" className='text-4xl md:relative top-16 left-10 eb-garamond-normal custom-bronze hover:text-current '>Salena Chaudhry</Link>
      <button 
        className='md:hidden focus:outline-none bg-transparent border-none p-0 m-0'
        onClick={() => setIsOpen(!isOpen)}
      >
         <FaGripLines className="w-6 h-6" />
      </button>

      <ul className={`eb-garamond-normal text-xl custom-bronze text-center mr-12 flex flex-col md:flex-row gap-4 md:gap-5 absolute md:relative top-16 left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0 ${isOpen ? 'block' : 'hidden'} md:flex`}>
      
      <li className='hover:underline'>
          <Link to="/about" className="text-current no-underline hover:text-current">About</Link>
        </li>

        <li className='hover:underline'>
          <Link to="/" className="text-current no-underline hover:text-current">Blog</Link>
        </li>

        <li className='hover:underline'>
          <Link to="/poems" className="text-current no-underline hover:text-current">Poems</Link>
        </li>

        <li className='hover:underline'>
          <Link to="/contact" className="text-current no-underline hover:text-current">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;




