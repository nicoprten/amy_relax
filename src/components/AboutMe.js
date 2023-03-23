import React from 'react'
import { Link } from 'react-router-dom';
import { WhatsappLogo, InstagramLogo } from 'phosphor-react';


export const AboutMe = () => {
  return (
    <div className='w-[60vw] mx-auto pt-20 pb-[4em] flex justify-between sm:flex-wrap' id='sobre-mi'>
        <div className='flex flex-col xl:w-3/4 w-1/2 rounded xl:pr-20'>
          <p className='text-sm my-2 bg-violet w-max p-2 rounded-t text-white'>MASSAGIST | HOLISTIC THERAPIST | SPEECH THERAPIST</p>
          <h2 className='xl:text-5xl text-3xl text-violet font-extrabold leading-relaxed tracking-wide'>María Amalia Alvarez</h2>
          <p className='text-md text-blue'>Specialist in different techniques of body massage and energetic therapies with a holistic vision in each treatment. I look for the patient to reach a state of complete relaxation and harmony always taking into account their needs.</p>
          <button className='flex gap-4 items-center w-max mt-4 py-2 px-4 bg-black text-white0 border-2 border-black rounded hover:text-black hover:shadow-xl hover:bg-white0 duration-200'>
            Reserve your turn
          </button>
        </div>
        <figure className='relative h-max xl:w-1/4 w-1/2'>
          <img className='xl:w-[300px] xl:h-[300px] object-cover rounded border-1 border-gray shadow-lg' src='./img/amalia-profile.jpeg' alt='Foto de perfil de Amalia' />
          <figcaption className='absolute flex bg-black bottom-0 text-white0 w-full'>
            <Link className='w-1/2 flex items-center justify-center gap-2 p-2 hover:bg-white0 hover:text-black duration-200' to=''>
              <WhatsappLogo size={22} />
              <p className='text-xs'>whatsapp</p>
            </Link>
            <Link className='w-1/2 flex items-center justify-center gap-2 p-2 hover:bg-white0 hover:text-black duration-200' to='https://www.instagram.com/amyrelax_spain_mallorca/' target='_blank'>
              <InstagramLogo size={22} />
              <p className='text-xs'>instagram</p>
            </Link>
          </figcaption>
        </figure>
    </div>
  )
}
