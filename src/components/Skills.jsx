import React from 'react';

import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import github from '../assets/github.png';
import Sql from '../assets/Sql.png';
import tailwind from '../assets/tailwind.png';
import Git from '../assets/Git.png';
import Bootstrap from '../assets/Bootstrap.jpeg';
import Trello from '../assets/Trello.jpeg';
import Figma from '../assets/Figma.png';


const Skills = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
        {
            id: 6,
            src: Sql,
            title: 'SQL',
            style: 'shadow-blue-300'
        },
        {
            id: 7,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-green-300'
        },
        {
            id: 8,
            src: Git,
            title: 'Git',
            style: 'shadow-red-300'
        },
        {
            id: 9,
            src: Bootstrap,
            title: 'Bootstrap',
            style: 'shadow-violet-300'
        },
        {
            id: 10,
            src: Trello,
            title: 'Trello',
            style: 'shadow-blue-400'
        },
        {
            id: 11,
            src: Figma,
            title: 'Figma',
            style: 'shadow-orange-400'
        },         
    ]
  return (
    <div name="skills" 
    className='bg-gradient-to-b from-gray-800 to-black w-full text-white py-16'> 
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
                <p className='py-6'>These are the Skills i'm familiar with!</p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-6 gap-8 text-center py-8 px-4 sm:px-0'>
                {
                    techs.map(({id, src, title, style}) => (
                <div key={id} 
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                    <img src={src} alt=""className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Skills