import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-green-800 text-gray-100 lg:relative lg:top-16'>
      <div className='max-w-7xl mx-auto px-4 py-8 lg:flex lg:justify-between'>

        {/* Footer Section 1 - Company Info */}
        <div className='mb-6 lg:w-1/4'>
          <h3 className='text-xl font-semibold mb-3 text-gray-200'>Useful Links</h3>
          <ul className='text-sm'>
            <li><a href='#' className='text-gray-300 hover:text-white transition duration-300'>FAQs</a></li>
            <li><a href='#' className='text-gray-300 hover:text-white transition duration-300'>Customer Support</a></li>
            <li><a href='#' className='text-gray-300 hover:text-white transition duration-300'>Blog</a></li>
            <li><a href='#' className='text-gray-300 hover:text-white transition duration-300'>Privacy Policy</a></li>
            <li><a href='#' className='text-gray-300 hover:text-white transition duration-300'>Terms of Service</a></li>
          </ul>
        </div>

        {/* Footer Section 2 - Contact Info */}
        <div className='mb-6 lg:w-1/4'>
          <h3 className='text-xl font-semibold mb-3 text-gray-200'>Contact Us</h3>
          <p className='text-sm text-gray-300'>Address: Dindori,Maharastra</p>
          <p className='text-sm text-gray-300'>Phone: 950322XXXX</p>
          <p className='text-sm text-gray-300'>Email: ashwaoilcompany@gamil.com</p>
        </div>

        {/* Footer Section 3 - Social Media Links */}
        <div className='mb-6 lg:w-1/4'>
          <h3 className='text-xl font-semibold mb-3 text-gray-200'>Follow Us</h3>
          <div className='flex gap-4'>
            <a href='#' className='text-gray-300 hover:text-white transition duration-300'><FaFacebook /></a>
            <a href='#' className='text-gray-300 hover:text-white transition duration-300'><FaTwitter /></a>
            <a href='#' className='text-gray-300 hover:text-white transition duration-300'><FaInstagram /></a>
            <a href='#' className='text-gray-300 hover:text-white transition duration-300'><FaLinkedin /></a>
          </div>
        </div>

        {/* Footer Section 4 - Company Description */}
        <div className='mb-6 lg:w-1/4'>
          <h3 className='text-xl font-semibold mb-3 text-gray-200'>ASHWA OIL COMPANY</h3>
          <p className='text-sm text-gray-300'>We are a leading oil company committed to providing high-quality products and excellent customer service.</p>
          <p className='text-sm mt-3 text-gray-300'>Thank you for choosing ASHWA OIL COMPANY.</p>
        </div>
      </div>

      {/* Bottom Section - Legal Information */}
      <div className='bg-green-900 py-4'>
        <div className='max-w-7xl mx-auto text-center text-sm text-gray-300'>
          <p>&copy; 2024 ASHWA OIL COMPANY. All rights reserved.</p>
          <p>Terms of Service | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
