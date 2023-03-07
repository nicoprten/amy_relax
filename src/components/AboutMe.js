import React from 'react'
import { Link } from 'react-router-dom';
import { WhatsappLogo, InstagramLogo } from 'phosphor-react';


export const AboutMe = () => {
  return (
    <div className='w-[70vw] mx-auto pt-[14em] pb-[8em] flex justify-between sm:flex-wrap-reverse' id='sobre-mi'>
        <div className='flex flex-col xl:w-3/4 bg-brown rounded xl:pr-20 border-1 border-gray xl:bg-white xl:border-none'>
          <p className='text-sm my-2 bg-green w-max p-2 rounded-t text-white'>MASAJISTA | TERAPEUTA HOLÍSTICA | LOGOPEDA</p>
          <h2 className='xl:text-5xl text-2xl text-green font-extrabold leading-relaxed tracking-wide'>María Amalia Alvarez</h2>
          <p className='text-lg mt-[30px]'>Especialista en las técnicas del masaje terapéutico y de las diferentes técnicas de masaje deportivo, según los distintos tipos de actividades físicas.</p>
          <button className='flex gap-4 items-center w-max mt-4 py-2 px-4 bg-white text-black border-2 border-black rounded hover:bg-black hover:text-white duration-200'>
            Reserva tu turno
          </button>
        </div>
        <figure className='relative h-max xl:w-1/4'>
          <img className='w-[300px] h-[300px] object-cover rounded border-1 border-gray shadow-lg' src='./img/amalia_profile.jpg' alt='Foto de perfil de Amalia' />
          <figcaption className='absolute flex bg-black bottom-0 text-white0 w-full rounded-t'>
            <Link className='w-1/2 flex items-center justify-center gap-2 p-2 rounded-t hover:bg-white0 hover:text-black duration-200' to=''>
              <WhatsappLogo size={22} />
              <p className='text-xs'>whatsapp</p>
            </Link>
            <Link className='w-1/2 flex items-center justify-center gap-2 p-2 rounded-t hover:bg-white0 hover:text-black duration-200' to='https://www.instagram.com/amy_alvarez_17/' target='_blank'>
              <InstagramLogo size={22} />
              <p className='text-xs'>instagram</p>
            </Link>
          </figcaption>
        </figure>
    </div>
  )
}
