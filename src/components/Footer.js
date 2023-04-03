import React from 'react'

import { InstagramLogo, WhatsappLogo } from 'phosphor-react';

export const Footer = () => {
  return (
    <div className='bg-gray0 flex flex-col items-center justify-center gap-10 py-10'>
      <img className='w-[80px]' src='./img/lotus-flower-gray.png' alt='Lotus flower icon' />
      <ul className='flex gap-2'>
        <li className='bg-brown-dark text-gray0 p-2 rounded-full'><InstagramLogo size={42} /></li>
        <li className='bg-brown-dark text-gray0 p-2 rounded-full'><WhatsappLogo size={42} /></li>
      </ul>
      <div className='text-xs p-2 text-center text-brown-dark border-1 border-gray rounded-2xl'>
        <p>Developed by</p>
        <p className=''>nicoprtenjaca@gmail.com</p>
      </div>
    </div>
  )
}
