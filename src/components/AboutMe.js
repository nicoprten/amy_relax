import React from 'react'
import { WhatsappLogo } from 'phosphor-react';


export const AboutMe = () => {
  return (
    <div className='flex justify-center gap-20 px-10 mt-[-100px]' id='sobre-mi'>
        <div className='flex flex-col w-2/6'>
          <h2 className='text-[32px] text-green font-extrabold leading-relaxed tracking-wide'>María Amalia Alvarez</h2>
          <p className='text-lg text-green'>Masajista</p>
          <p className='text-lg mt-[30px]'>Especialista en las técnicas del masaje terapéutico y de las diferentes técnicas de masaje deportivo, según los distintos tipos de actividades físicas.</p>
          <button className='flex gap-4 items-center w-max mt-4 py-2 px-4 bg-green text-white'>
            <WhatsappLogo className='text-green bg-white rounded-full' size={34} />
            Háblame
          </button>
        </div>
        <img className='w-[400px] h-[300px] object-cover' src='./img/amalia_profile.jpg' alt='Foto de perfil de Amalia' />
    </div>
  )
}
