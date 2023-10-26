import React from 'react';
import Weather from '../assets/portfolio/Weather.jpg';  //import images to use here
import Calculator from '../assets/portfolio/Calculator.jpg';
import QRCodeGenerator from '../assets/portfolio/QRCodeGenerator.jpg';
import Balara from '../assets/portfolio/Balara.jpg';
import NWL_AssetManagement from '../assets/portfolio/NWL_AssetManagement.jpg';



const Portfolio = () => {
    const portfolios = [                  //this is where you need to add your projects one by one
        {
            id: 1,                          //this number specifies where to put your portfolio
            src: Weather,
            demoUrl: 'https://bhanuprakashreddyv.github.io/Weather-Report/', // Replace with the actual demo URL
            codeUrl: 'https://github.com/Bhanuprakashreddyv/Weather-Report',

            //Need to import the links to open the project             //this is the file name after you are importing
        },
        {
            id: 2,
            src: Balara,
            demoUrl: 'https://bhanuprakashreddyv.github.io/Balara/',
            codeUrl: 'https://github.com/Bhanuprakashreddyv/Balara',
        },
        {
            id: 3,
            src: QRCodeGenerator,
            demoUrl: 'https://bhanuprakashreddyv.github.io/QR-code-generator/',
            codeUrl: 'https://github.com/Bhanuprakashreddyv/QR-code-generator',

        },
        {
            id: 5,
            src: Calculator,
            demoUrl: 'https://bhanuprakashreddyv.github.io/Calculator/',
            codeUrl: 'https://github.com/Bhanuprakashreddyv/Calculator',


        },
        {
            id: 4,
            src: NWL_AssetManagement,
            codeUrl: 'https://github.com/Bhanuprakashreddyv/NWL-APP-to-manage-their-assets',
        },
    ];
  return (
    <div
    name="portfolio"
    className='bg-gradient-to-b from-black to-gray-800 w-full
    text-white md:h-screen pt-16'
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                border-gray-500'>
                Portfolio
                </p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8
            px-12 sm:px-0'>
                {
                portfolios.map(({id, src, demoUrl, codeUrl}) => (
                <div key={id}
                className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} 
                    alt=""
                    className='rounded-md duration-200 hover:scale-105'
                    />
                    <div className='flex items-center justify-center'>
                    <a href={demoUrl} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                    <a href={codeUrl} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                        
                    </div>
                </div>
                ))}
            </div>           
        </div>
    </div>
  )
};

export default Portfolio;