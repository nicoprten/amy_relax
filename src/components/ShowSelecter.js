import React from 'react'

import { Schedules } from './Schedules';

export const ShowSelecter = ({reservation, setReservation}) => {

    console.log(reservation)

  return (
    <div className='my-8 select-none'>
        {reservation.masaje === 'default' &&
            <div>
                <p className='text-center text-xl text-gray my-6'>Seleccione el tipo de masaje</p>
                <div className='flex flex-wrap justify-center gap-4 my-20'>
                    <button className='w-1/4 text-center bg-black text-white p-2 rounded hover:shadow-xl duration-200' onClick={(e) => setReservation({...reservation, masaje: e.target.innerHTML})}>Sesion de Reiki</button>
                    <button className='w-1/4 text-center bg-black text-white p-2 rounded hover:shadow-xl duration-200' onClick={(e) => setReservation({...reservation, masaje: e.target.innerHTML})}>Masaje descontracturante</button>
                    <button className='w-1/4 text-center bg-black text-white p-2 rounded hover:shadow-xl duration-200' onClick={(e) => setReservation({...reservation, masaje: e.target.innerHTML})}>Masajes a embarazadas y a niños</button>
                    <button className='w-1/4 text-center bg-black text-white p-2 rounded hover:shadow-xl duration-200' onClick={(e) => setReservation({...reservation, masaje: e.target.innerHTML})}>Drenaje linfático</button>
                    <button className='w-1/4 text-center bg-black text-white p-2 rounded hover:shadow-xl duration-200' onClick={(e) => setReservation({...reservation, masaje: e.target.innerHTML})}>Reflexologia podal</button>
                    <button className='w-1/4 text-center bg-black text-white p-2 rounded hover:shadow-xl duration-200' onClick={(e) => setReservation({...reservation, masaje: e.target.innerHTML})}>Exfoliación e hidratación</button>
                    <button className='w-1/4 text-center bg-black text-white p-2 rounded hover:shadow-xl duration-200' onClick={(e) => setReservation({...reservation, masaje: e.target.innerHTML})}>Limpieza facial y drenaje</button>
                </div>
            </div>
        }
        {(reservation.masaje !== 'default' && reservation.duracion === 'default') &&
            <div>
                <p className='text-center text-xl text-gray my-6'>Seleccione la duración del masaje</p>
                <div className='flex flex-wrap justify-center gap-4 my-20'>
                    <div className='flex flex-col items-center gap-4 w-1/4 group'>
                        <button className='w-full text-center bg-black text-white p-2 rounded hover:shadow-xl duration-200' onClick={(e) => setReservation({...reservation, duracion: '60 min'})}>60 minutos</button>
                        <span className='w-max bg-brown p-2 rounded text-sm opacity-0 group-hover:opacity-100 duration-200'>$40</span>
                    </div>
                    <div className='flex flex-col items-center gap-4 w-1/4 group'>
                        <button className='w-full text-center bg-black text-white p-2 rounded hover:shadow-xl duration-200' onClick={(e) => setReservation({...reservation, duracion: '90 min'})}>90 minutos</button>
                        <span className='w-max bg-brown p-2 rounded text-sm opacity-0 group-hover:opacity-100 duration-200'>$55</span>
                    </div>
                </div>
                <button className='w-max text-green border-1 border-green p-2 rounded hover:bg-green hover:text-white duration-200' onClick={() => setReservation({...reservation, masaje: 'default'})}>Volver</button>
            </div>
        }
        {(reservation.duracion !== 'default' && reservation.dia === 'default') &&
            <div>
                <p className='text-center text-xl text-gray my-6'>Seleccione el día</p>
                <Schedules />
                <button className='text-green border-1 border-green p-2 rounded hover:bg-green hover:text-white duration-200' onClick={() => setReservation({...reservation, duracion: 'default'})}>Volver</button>
            </div>
        }
        {(reservation.dia !== 'default' && reservation.horario === 'default') &&
            <div>
                <p className='text-center text-xl text-gray my-6'>Seleccione el horario</p>
            </div>
        }
        {(reservation.horario !== 'default' && reservation.cliente === 'default') &&
            <div>
                <p className='text-center text-xl text-gray my-6'>Completa con sus datos por favor.</p>
            </div>
        }
    </div>
  )
}
