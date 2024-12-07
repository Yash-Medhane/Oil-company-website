import React from 'react';

const Products = () => {
  return (
    <div id="products" className='bg-green-200 min-h-screen py-16'>
      <div className='max-w-7xl mx-auto px-4'>
        <h1 className='text-4xl font-bold text-center mb-12 text-green-800'>OUR PRODUCTS</h1>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Product Card 1 */}
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img src="./product1.jpeg" alt="Soybean Oil" className='w-full h-60 object-cover' />
            <div className='p-6'>
              <p className='font-bold text-xl mb-4 text-center text-green-800'>Soyabean Oil</p>
              <p className='text-gray-700'>
                Soyabean Oil is extracted from high-quality soyabeans and is rich in essential fatty acids. It is known for its light flavor and versatility in cooking various cuisines.
              </p>
            </div>
          </div>
          
          {/* Product Card 2 */}
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img src="./product2.jpeg" alt="Sunflower Oil" className='w-full h-60 object-cover' />
            <div className='p-6'>
              <p className='font-bold text-xl mb-4 text-center text-green-800'>Sunflower Oil</p>
              <p className='text-gray-700'>
                Sunflower Oil is cold-pressed from sunflower seeds, ensuring a pure and natural cooking oil. It has a high smoke point and is ideal for frying and baking.
              </p>
            </div>
          </div>
          
          {/* Product Card 3 */}
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img src="./product3.jpeg" alt="Groundnut Oil" className='w-full h-60 object-cover' />
            <div className='p-6'>
              <p className='font-bold text-xl mb-4 text-center text-green-800'>Groundnut Oil</p>
              <p className='text-gray-700'>
                Groundnut Oil, also known as peanut oil, is renowned for its nutty flavor and high smoke point. It enhances the taste of stir-fries and deep-fried dishes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
