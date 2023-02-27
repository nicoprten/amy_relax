import React from 'react'

import { Schedules } from './Schedules';

export const ShowSelecter = ({reservation, setReservation}) => {

    console.log(reservation)

  return (
    <div className='my-8'>
        {reservation.massage === 'default' &&
            <div>
                <p className='text-center text-xl text-gray my-6'>Seleccione el tipo de masaje</p>
                <ul className='flex flex-wrap gap-4'>
                    <li className='bg-black text-white p-2'><button onClick={(e) => setReservation({...reservation, massage: e.target.innerHTML})}>Sesion de Reiki</button></li>
                    <li className='bg-black text-white p-2'><button onClick={(e) => setReservation({...reservation, massage: e.target.innerHTML})}>Masaje descontracturante</button></li>
                    <li className='bg-black text-white p-2'><button onClick={(e) => setReservation({...reservation, massage: e.target.innerHTML})}>Masajes a embarazadas y a niños</button></li>
                    <li className='bg-black text-white p-2'><button onClick={(e) => setReservation({...reservation, massage: e.target.innerHTML})}>Drenaje linfático</button></li>
                    <li className='bg-black text-white p-2'><button onClick={(e) => setReservation({...reservation, massage: e.target.innerHTML})}>Reflexologia podal</button></li>
                    <li className='bg-black text-white p-2'><button onClick={(e) => setReservation({...reservation, massage: e.target.innerHTML})}>Tratamiento corporal - Exfoliación e hidratación</button></li>
                    <li className='bg-black text-white p-2'><button onClick={(e) => setReservation({...reservation, massage: e.target.innerHTML})}>Limpieza facial - Drenaje</button></li>
                </ul>
            </div>
        }
        {(reservation.massage !== 'default' && reservation.day === 'default') &&
            <div>
                <p className='text-center text-xl text-gray my-6'>Seleccione el día</p>
                <Schedules />
            </div>
        }
        {(reservation.day !== 'default' && reservation.hour === 'default') &&
            <div>
                <p className='text-center text-xl text-gray my-6'>Seleccione el horario</p>
            </div>
        }
        {(reservation.hour !== 'default' && reservation.client === 'default') &&
            <div>
                <p className='text-center text-xl text-gray my-6'>Completa con sus datos por favor.</p>
            </div>
        }
    </div>
  )
}
