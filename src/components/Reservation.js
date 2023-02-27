import React from 'react';
import { useState } from 'react';

import { ShowSelecter } from './ShowSelecter';

export const Reservation = () => {

    let pepe = 'pepe'
    const [reservation, setReservation] = useState({
        massage: "default",
        day: "default",
        hour: "default",
        client: "default"
    });

  return (
    <div className='px-80'>
        <h2 className='text-3xl text-center my-4 p-2'>RESERVA TU PRÓXIMO MASAJE</h2>
        <ul className='flex gap-20 justify-center my-4'>
            <li className='w-1/4 border-2 border-black hover:bg-black hover:text-white duration-200'><button className='w-full p-2'>MASAJE</button></li>
            <li className='w-1/4 border-2 border-black hover:bg-black hover:text-white duration-200'><button className='w-full p-2'>DÍA</button></li>
            <li className='w-1/4 border-2 border-black hover:bg-black hover:text-white duration-200'><button className='w-full p-2'>HORARIO</button></li>
            <li className='w-1/4 border-2 border-black hover:bg-black hover:text-white duration-200'><button className='w-full p-2'>DATOS</button></li>
        </ul>
        {reservation.massage !== 'default' &&
            Object.values(reservation).map(value => (value !== 'default') && <p className='border-b-1 border-black'>{value}</p>)
        }
        <ShowSelecter reservation={reservation} setReservation={setReservation}/>
    </div>
  )
}
