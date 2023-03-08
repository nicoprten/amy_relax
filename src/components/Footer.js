import React from 'react'

import { InstagramLogo, WhatsappLogo } from 'phosphor-react';

export const Footer = () => {
  return (
    <div className='bg-gray0 flex flex-col items-center justify-center gap-10 py-10 text-blue'>
      <p>LOGO</p>
      <ul className='flex gap-2'>
        <li className='text-blue bg-violet-light p-2 rounded-full'><InstagramLogo size={42} /></li>
        <li className='text-blue bg-violet-light p-2 rounded-full'><WhatsappLogo size={42} /></li>
      </ul>
      <div className='text-sm p-2 text-center'>
        <p>Development</p>
        <p className=''>nicoprtenjaca@gmail.com</p>
      </div>
    </div>
  )
}
