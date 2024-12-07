import React from 'react';

const Intro = () => {
  return (
    <div id='about' className='bg-white text-gray-800 min-h-screen py-20'>
      <div className='max-w-7xl mx-auto px-4 lg:flex lg:justify-between items-center lg:gap-10 lg:my-10'>

        {/* Image Section (Mobile First) */}
        <div className='order-1 lg:order-2 lg:flex-1 flex flex-col items-center mb-8 lg:mb-0 lg:relative lg:bottom-10 lg:left-9'>
          <img src="./main-image.png" alt="Main Image" className='w-full max-w-md lg:max-w-lg object-cover rounded-lg' />
        </div>

        {/* Text Section */}
        <div className='order-2 lg:order-1 lg:flex-1 text-center lg:text-left mt-8 lg:mt-0'>
          <h1 className='text-3xl lg:text-5xl font-bold font-serif leading-tight mx-5'>
            Welcome To <span className='font-sans text-green-600'>ASHWA</span> Oil Company
          </h1>
          <p className='text-gray-600 mx-6 my-4'>
            Founder <span className='text-gray-800 font-bold text-xl lg:text-xl hover:text-green-700'>Aniket Medhane</span>
          </p>
          <p className='font-medium text-gray-700 mx-2 my-5'>
            At ASHWA Oil Company, we are committed to delivering the finest quality oils that not only enhance the flavor of your dishes but also contribute to a healthier lifestyle. Our oils are meticulously sourced and processed to ensure the highest standards of purity and taste.
          </p>
          <p className='font-medium text-gray-700 mx-2 my-5'>
            We believe in sustainability and eco-friendly practices, ensuring that our products are as good for the planet as they are for you. Join us on a journey towards better health and exquisite culinary experiences with ASHWA Oil Company.
          </p>

          {/* Features Section */}
          <div className='py-6'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex items-center gap-2'>
                <img src="./taste.png" alt="Best Taste" className='w-6 lg:w-10' />
                <p className='text-2xl lg:text-lg font-sans text-green-600'>Best Taste</p>
              </div>
              <div className='flex items-center gap-2'>
                <img src="./check-mark.png" alt="High Quality" className='w-6 lg:w-10' />
                <p className='text-2xl lg:text-lg font-sans text-green-600'>High Quality</p>
              </div>
              <div className='flex items-center gap-2'>
                <img src="./badge.png" alt="Certified" className='w-6 lg:w-10' />
                <p className='text-2xl lg:text-lg font-sans text-green-600'>Certified</p>
              </div>
              <div id="products" className='flex items-center gap-2'>
                <img src="./benefits.png" alt="Health Benefits" className='w-6 lg:w-10' />
                <p className='text-2xl lg:text-lg font-sans text-green-600'>Health Benefits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
