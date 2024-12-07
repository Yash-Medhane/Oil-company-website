import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/send', { email, message });
      setResponse(res.data);
    } catch (error) {
      console.error('Error sending message:', error);
      setResponse('Failed to send message');
    }
  };

  return (
    <div className='max-w-7xl mx-auto px-4 py-10 bg-green-100 lg:relative lg:top-6 rounded-3xl' id='contact'>
      <h2 className='text-5xl font-bold mb-6 text-center text-green-800'>Contact Us</h2>
      <div className='lg:flex justify-between items-center'>

        <div className='lg:block hidden'>
          <img src='./customer.png' alt='Customer Image' className='mx-auto w-72' />
        </div>

        {/* Contact Form - Visible on All Screen Sizes */}
        <div className='lg:flex lg:justify-around w-full lg:w-1/2 mx-auto'>
          <div className='w-full lg:w-2/3'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <div className='flex flex-col'>
                <label htmlFor='email' className='font-semibold text-green-700'>Email Address</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='border-2 border-green-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-500'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='message' className='font-semibold text-green-700'>Message</label>
                <textarea
                  id='message'
                  name='message'
                  rows='4'
                  className='border-2 border-green-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-500'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type='submit' className='bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition duration-300'>Submit</button>
            </form>
            {response && <p className='mt-4 text-center text-2xl text-green-800'>{response}</p>}
          </div>
        </div>

        <div className='lg:block hidden'>
          <img src='./helpline.png' alt='Contact Image' className='mx-auto w-72' />
        </div>

      </div>
    </div>
  );
}

export default ContactForm;
