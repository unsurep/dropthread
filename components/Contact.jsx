"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import toast from 'react-hot-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const toastId = toast.loading('Submitting...');
    try {
      const response = await axios.post('/api/contact', {
        name,
        email,
        subject,
        message,
      });
      if (response.status === 200) {
        toast.success('Form submitted successfully!', { id: toastId });
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form. Please try again.', { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 md:px-12 lg:px-24 py-12">
      {isLoading && (
        <div className="absolute inset-0 backdrop-blur-sm z-10"></div>
      )}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center mx-auto">
        <h1 className='py-8 font-black text-2xl tracking-[5px]'>Contact Us</h1>
        <form onSubmit={handleSubmit} className='border-2 border-black flex flex-col gap-3 px-6 sm:px-12 py-6 rounded-xl w-full max-w-lg'>
          {/* Name */}
          <div className='flex flex-col'>
            <label>Name</label>
            <input
              placeholder="Full Name"
              type="text"
              className="outline-none border-2 border-black px-3 rounded py-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className='flex flex-col'>
            <label>Email</label>
            <input
              placeholder="Email"
              type="email"
              className="outline-none border-2 border-black px-3 rounded py-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Subject */}
          <div className='flex flex-col '>
            <label>Subject</label>
            <input
              placeholder="Subject"
              type="text"
              className="outline-none border-2 border-black px-3 rounded py-1"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              className="textarea px-3 border-black rounded border-2 outline-none w-full"
              placeholder="Message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <div className=''>
            <button type="submit" className="relative flex items-center justify-center mx-auto  px-6 py-3 bg-white font-semibold mt-8 border-2 border-black overflow-hidden group rounded-full cursor-pointer">
              <span className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-400">
                Submit
              </span>
            </button>
          </div>
        </form>
      </div>

      <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
        <Image src="/logo.png" alt="logo" width={500} height={500} className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Contact;
