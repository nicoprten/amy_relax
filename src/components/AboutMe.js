import React from 'react'
import { Link } from 'react-router-dom';
import { WhatsappLogo, InstagramLogo } from 'phosphor-react';


export const AboutMe = () => {
  return (
    <div className='w-[60vw] mx-auto pt-28 pb-[4em] flex flex-col justify-between lg:flex-row' id='sobre-mi'>
        <div className='flex flex-col w-full rounded lg:w-3/4 lg:pr-10 xl:pr-20 w-full'>
          <p className='text-sm my-2 bg-brown-dark sm:w-max p-2 rounded-t text-white'>MASSAGIST | HOLISTIC THERAPIST | SPEECH THERAPIST</p>
          <h2 className='lg:text-5xl sm:text-3xl text-xl text-brown-dark font-extrabold leading-relaxed tracking-wide'>María Amalia Alvarez</h2>
          <p className='text-sm sm:text-base text-blue'>Specialist in different techniques of body massage and energetic therapies with a holistic vision in each treatment. I look for the patient to reach a state of complete relaxation and harmony always taking into account their needs.</p>
          <button className='flex gap-4 items-center mx-auto sm:mx-0 text-center sm:text-left sm:w-max mt-4 py-2 px-4 bg-black text-white0 border-2 border-black hover:text-black hover:shadow-xl hover:bg-gray0 duration-200'>
            Reserve your turn
          </button>
        </div>
        <figure className='lg:relative h-max xl:w-1/4 lg:mt-0 mt-4 flex gap-4 flex-col sm:flex-row items-center'>
          <img className='lg:w-[300px] w-[200px] xl:h-[300px] h-full object-cover rounded border-1 border-gray shadow-lg' src='./img/amalia-profile.jpeg' alt='Foto de perfil de Amalia' />
          <figcaption className='lg:absolute flex flex-col lg:flex-row lg:bottom-0 text-white0 w-full h-max gap-2 lg:gap-0'>
            <Link className='lg:w-1/2 w-full flex items-center justify-center gap-2 p-2 bg-black rounded lg:rounded-none hover:bg-white0 hover:text-black duration-200' to=''>
              <WhatsappLogo size={22} />
              <p className='lg:text-xs text-sm'>whatsapp</p>
            </Link>
            <Link className='lg:w-1/2 w-full flex items-center justify-center gap-2 p-2 bg-black rounded lg:rounded-none hover:bg-white0 hover:text-black duration-200' to='https://www.instagram.com/amyrelax_spain_mallorca/' target='_blank'>
              <InstagramLogo size={22} />
              <p className='lg:text-xs text-sm'>instagram</p>
            </Link>
          </figcaption>
        </figure>
    </div>
  )
}
