"use client"
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { RiMenu3Fill } from 'react-icons/ri';
import Dropdown from './Dropdown';

const Navbar = () => {
  const menu = [
    {
      name: 'Element 1',
      submenus: [
        { name: 'Submenu 1', url: '/submenu1' },
        { name: 'Submenu 2', url: '/submenu2' },
      ],
    },
    {
      name: 'Element 2',
      submenus: [{ name: 'Submenu 3', url: '/submenu3' }],
    },
    {
      name: 'Element 3',
      submenus: [
        { name: 'Submenu 4', url: '/submenu4' },
        { name: 'Submenu 5', url: '/submenu5' },
      ],
    },
    {
      name: 'Element 4',
      submenus: [{ name: 'Submenu 6', url: '/submenu6' }],
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-lg text-white"> {/* Changed text-black to text-white */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4">
        <div className="flex items-center mb-4 md:mb-0">
          <a href="#" className="text-white text-3xl font-bold"> {/* Changed text-black to text-white */}
            Your Logo
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            <RiMenu3Fill className="text-2xl" />
          </button>
        </div>

        {/* Menu for all screen sizes */}
        <div className={`md:flex flex-grow items-center justify-center ${menuOpen ? 'flex' : 'hidden'}`}> {/* Changed 'block' to 'flex' */}
          <ul className="flex flex-col md:flex-row items-end md:space-x-6 text-white"> {/* Changed text-black to text-white */}
            {menu.map((menuItem, index) => (
              <li key={index} className="text-white relative"> {/* Changed text-black to text-white */}
                <Dropdown name={menuItem.name} submenus={menuItem.submenus} />
              </li> 
            ))}
          </ul>
          {/* Search Icon */}
          <div className="relative rounded-full border-dotted border-2 border-white md:hidden ml-4"> {/* Changed border-black to border-white */}
            <AiOutlineSearch className="text-white p-2" /> {/* Changed text-black to text-white */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
