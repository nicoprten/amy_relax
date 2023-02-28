import React from 'react';
import { useState } from 'react';

import { ShowSelecter } from './ShowSelecter';

export const Reservation = () => {

    const [reservation, setReservation] = useState({
        masaje: "default",
        duracion: "default",
        dia: "default",
        horario: "default",
        cliente: "default"
    });

  return (
    <div className='px-80'>
        <h2 className='text-3xl text-center my-4 p-2'>RESERVA TU PRÓXIMO MASAJE</h2>
        <ul className='flex gap-20 justify-center my-4'>
            <li className={"w-1/4 border-2 border-black p-2 text-left pl-8 " + (reservation.masaje !== 'default' && 'bg-black text-white')}>MASAJE</li>
            <li className={'w-1/4 border-2 border-black p-2 text-left pl-8 ' + (reservation.duracion !== 'default' && 'bg-black text-white')}>DURACIÓN</li>
            <li className={'w-1/4 border-2 border-black p-2 text-left pl-8 ' + (reservation.dia !== 'default' && 'bg-black text-white')}>DÍA</li>
            <li className={'w-1/4 border-2 border-black p-2 text-left pl-8 ' + (reservation.horario !== 'default' && 'bg-black text-white')}>HORARIO</li>
            <li className={'w-1/4 border-2 border-black p-2 text-left pl-8 ' + (reservation.cliente !== 'default' && 'bg-black text-white')}>DATOS</li>
        </ul>
        {reservation.massage !== 'default' &&
            // Object.values(reservation).map(value => (value !== 'default') && <p className='border-b-1 border-black'>{value}</p>)
            Object.keys(reservation).map(value => (reservation[value] !== 'default') && <p className='text-lg text-green border-b-1 border-green w-1/2'>{`${value.charAt(0).toUpperCase() + value.slice(1)} : ${reservation[value]}`}</p>)
        }
        <ShowSelecter reservation={reservation} setReservation={setReservation}/>
    </div>
  )
}
