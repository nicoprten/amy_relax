import { Link } from 'react-router-dom'

import { InstagramLogo, WhatsappLogo } from 'phosphor-react';

export const Footer = () => {
  return (
    <div className='bg-gray0 flex flex-col items-center justify-center gap-10 py-10'>
      <img className='w-[80px]' src='./img/lotus-flower-gray.png' alt='Lotus flower icon' />
      <ul className='flex gap-2'>
        <li className='bg-brown-dark text-gray0 p-2 rounded-full hover:bg-brown hover:cursor-pointer duration-200'><Link to='https://www.instagram.com/amyrelax_spain_mallorca/' target='_blank'><InstagramLogo size={42} /></Link></li>
        <li className='bg-brown-dark text-gray0 p-2 rounded-full hover:bg-brown hover:cursor-pointer duration-200'><Link to='https://api.whatsapp.com/send?phone=34660281404' target='_blank'><WhatsappLogo size={42} /></Link></li>
      </ul>
      <div className='text-xs p-2 text-center text-brown-dark border-t-1 border-gray'>
        <p>Developed by</p>
        <p className=''>nicoprtenjaca@gmail.com</p>
      </div>
    </div>
  )
}
