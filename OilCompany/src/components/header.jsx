import React from 'react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className='bg-emerald-600 text-white fixed w-full z-10 top-0'>
      <div className='max-w-7xl mx-auto px-4 py-4 flex items-center justify-between'>
        
        {/* Logo and Company Name */}
        <div className='flex items-center gap-3 cursor-pointer' onClick={scrollToTop}>
          <img src="./logo1.png" alt="logo" className='w-20 mix-blend-plus-lighter' />
          <p className='text-xl font-bold tracking-wide text-white-950 bg-gradient-to-r from-slate-400 to-gray-800 px-2 rounded-2xl py-1'>ASHWA OIL COMPANY</p>
        </div>

        {/* Navigation Menu - Large Screens */}
        <nav className='hidden lg:flex gap-8 items-center'>
          <ul className='flex gap-8 text-gray-300'>
            <li><a href="#" className='hover:text-white hover:underline' onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#" className='hover:text-white hover:underline' onClick={() => scrollToSection('products')}>Products</a></li>
            <li><a href="#" className='hover:text-white hover:underline' onClick={() => scrollToSection('services')}>Services</a></li>
          </ul>
          <a href="#" className='px-4 py-2 bg-green-500 hover:bg-green-900 text-white rounded-md transition duration-300' onClick={() => scrollToSection('contact')}>Order Now</a>
        </nav>

        {/* Mobile Menu Icon - Hidden on Large Screens */}
        <div className='lg:hidden'>
          <FaBars className='text-gray-300 text-3xl cursor-pointer' />
        </div>
        
      </div>
    </header>
  );
}

export default Header;
