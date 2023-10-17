"use client"
import Link from 'next/link';
import Image from 'next/image';
import company from '../images/company.png';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffff');
        setTextColor('#ffff');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='sticky left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div className='max-w-[100vw] m-auto flex justify-between items-center p-4 text-blue-800'>
        <Link href='/'>
          <Image src={company} alt="Company Logo" className="w-auto" />
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4'>
            <Link href='/#gallery'>Pages</Link>
          </li>
          <li className='p-4'>
            <Link href='/work'>Classes</Link>
          </li>
          <li className='p-4'>
            <Link href='/contact'>Teacher</Link>
          </li>
          <li className='p-4'>
            <Link href='/contact'>Shop</Link>
          </li>
          <li className='p-4'>
            <Link href='/contact'>Blogs</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10  bg-gray-800'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500 text-white'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500 text-white'>
              <Link href='/#gallery'>Pages</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500 text-white'>
              <Link href='/work'>Classes</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500 text-white'>
              <Link href='/contact'>Teacher</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500 text-white'>
              <Link href='/contact'>Shop</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500 text-white'>
              <Link href='/contact'>Blogs</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
