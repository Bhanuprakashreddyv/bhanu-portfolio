import React from 'react';
import HeroImage from '../assets/HERO.jpeg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full p-10">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            I'm a Front-End Developer.
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            A Hobby Turned into a Programmer.
          </p>
          <div className="flex flex-col sm:flex-row">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3
                my-2 flex items-center rounded-md bg-gradient-to-r
                from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <a
              href="/Bhanu_VENNAPUSA Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-6 py-3 my-2 pr-8 flex items-center rounded-md bg-gradient-to-r
                from-yellow-800 to-green-900 cursor-pointer sm:ml-4 mr-40 pl-9"
            >
              Resume
              {/* <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span> */}
            </a>
          </div>
        </div>
        <div className="md:w-full mt-8 pl-16">
          <img src={HeroImage} alt="my profile" className="rounded-2xl w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default Home;
