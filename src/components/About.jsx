import React from 'react';

const About = () => {
  return (
    <div 
     name="about"
     className='w-full h-screen bg-gradient-to-b from-gray-800
     to-black text-white'
     >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full pb-3'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                border-gray-500 mt-20'>
                    About
                </p>
            </div>
            <p className='text-2xl mt-0 sm:mt-0 sm:py-3'>
            As a dedicated and passionate Front-End Developer, 
            my journey in the world of web development has been 
            defined by my unwavering commitment to creating engaging 
            and responsive user experiences. With a strong foundation in HTML, 
            CSS, JavaScript, and React, My portfolio 
            showcases a diverse range of projects, each a testament to my ability to
            bridge creativity with functionality.
            </p>
            <br />
            <p className='text-2xl'>
            My development journey extends to creating intuitive user interfaces, 
            ensuring optimal performance, and staying at the forefront of web development trends. 
            I believe in the power of technology to transform ideas into reality, 
            and I'm always eager to take on new challenges. 
            </p>
        </div>
    </div>
  )
}

export default About