import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full py-6 flex justify-between items-center navbar '>
      <img
        className='w-[124px] h-[32px]'
        src={logo}
      />
      <ul className='hidden sm:flex  space-x-10 items-center '>
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className='font-poppins cursor-pointer text-[16px] 
          text-white'
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className='flex sm:hidden'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px]'
          onClick={() =>
            setToggle((prev) => !prev)
          }
        />

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='flex flex-col justify-end items-center flex-1 space-y-6'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className='font-poppins font-normal cursor-pointer text-[16px] 
           text-white'
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
