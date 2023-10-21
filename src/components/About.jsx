import React from 'react';

const About = () => {
  return (
    <div 
     name="about"
     className='w-full h-screen bg-gradient-to-b from-gray-800
     to-black text-white'
     >
        <div className='max-w-screen-lg p-4 ma-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                border-gary-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Nulla neque cupiditate recusandae sunt magni distinctio 
                 aut incidunt facilis illo quis aperiam ducimus officia, 
                 pariatur quas. Hic iure, repellendus velit quam autem deserunt 
                 facere quidem. Dignissimos, facere in. Necessitatibus earum praesentium 
                 minima! Eaque ducimus magnam quasi ipsum, in aliquam tenetur similique?
            </p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero at adipisci
                 molestias consequuntur? Nihil earum esse ipsum quibusdam. Atque itaque, 
                 tempora quas fugit consectetur dolor reprehenderit nesciunt perspiciatis 
                 magnam vitae sapiente aperiam molestiae rem aliquid neque? In unde necessitatibus 
                 soluta perspiciatis nostrum, earum doloribus odio! Repellat minus quaerat optio maiores.
            </p>
        </div>
    </div>
  )
}

export default About