import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        {/* Display only for smaller screens */}
        <div className="flex items-center space-x-4 mb-4 sm:hidden">
          {/* GitHub */}
          <a
            href="https://github.com/Bhanuprakashreddyv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            <FaGithub size={30} />
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/bhanu-prakash-reddy-vennapusa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            <FaLinkedin size={30} />
          </a>
          {/* Email */}
          <a href="mailto:v.bhanureddy184@gmail.com" className="hover:text-gray-500">
            <HiOutlineMail size={30} />
          </a>
          {/* Resume */}
          <a
            href="/Bhanu_VENNAPUSA Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            <BsFillPersonLinesFill size={30} />
          </a>
        </div>

        {/* Hide on smaller screens and display on larger screens */}
        <div className="hidden sm:flex items-center space-x-4">
          {/* GitHub */}
          <a
            href="https://github.com/Bhanuprakashreddyv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            <FaGithub size={30} />
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/bhanu-prakash-reddy-vennapusa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            <FaLinkedin size={30} />
          </a>
          {/* Email */}
          <a href="mailto:v.bhanureddy184@gmail.com" className="hover:text-gray-500">
            <HiOutlineMail size={30} />
          </a>
          {/* Resume */}
          <a
            href="/Bhanu_VENNAPUSA Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            <BsFillPersonLinesFill size={30} />
          </a>
        </div>

        <div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Bhanu Prakash Reddy VENNAPUSA. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
