import React from 'react';
import Link from 'next/link';

interface DropdownProps {
  name: string;
  submenus: { name: string; url: string }[];
}
const Dropdown: React.FC<DropdownProps> = ({ name, submenus }) => {
  return (
    <div className="relative group">
      <button className="text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-red-500 active:pink-700">
        {name}
      </button>
      <div className="absolute hidden mt-2 py-2 bg-gray-700 text-white rounded-lg shadow-lg group-hover:block">
        <ul className="menu p-2">
          {submenus.map((submenu, index) => (
            <li key={index}>
              <Link href={submenu.url} className="block px-4 py-2 whitespace-nowrap">
                {submenu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
