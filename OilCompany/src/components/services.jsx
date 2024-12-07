import React from 'react';

const Services = () => {
  return (
    <div id="services" className='bg-green-50 py-16'>
      <div className='max-w-7xl mx-auto px-4'>
        <h1 className='text-4xl font-bold text-center mb-12 text-green-800'>Our Services</h1>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Service 1: Low Cost Products */}
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img src="./service1.png" alt="Low Cost Products" className='mx-auto my-10 w-48 h-auto object-cover' />
            <div className='p-6'>
              <p className='font-bold text-xl mb-4 text-center text-green-800'>Low Cost Products</p>
              <p className='text-gray-700'>Access high-quality oils at affordable prices without compromising on purity or taste.</p>
            </div>
          </div>
          
          {/* Service 2: Free Delivery */}
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img src="./service2.png" alt="Free Delivery" className='mx-auto my-10 w-48 h-auto object-cover' />
            <div className='p-6'>
              <p className='font-bold text-xl mb-4 text-center text-green-800'>Free Delivery</p>
              <p className='text-gray-700'>Enjoy the convenience of free and reliable delivery services on all orders.</p>
            </div>
          </div>
          
          {/* Service 3: Tested Quality & Purity */}
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img src="./service3.png" alt="Tested Quality & Purity" className='mx-auto my-10 w-48 h-auto object-cover' />
            <div className='p-6'>
              <p className='font-bold text-xl mb-4 text-center text-green-800'>Tested Quality & Purity</p>
              <p className='text-gray-700'>Guaranteed purity and quality through rigorous testing and certification processes.</p>
            </div>
          </div>
          
          {/* Service 4: Eco-friendly Practices */}
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img src="./service4.png" alt="Eco-friendly Practices" className='mx-auto my-10 w-48 h-auto object-cover' />
            <div className='p-6'>
              <p className='font-bold text-xl mb-4 text-center text-green-800'>Eco-friendly Practices</p>
              <p className='text-gray-700'>Commitment to sustainable sourcing and eco-friendly packaging solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
