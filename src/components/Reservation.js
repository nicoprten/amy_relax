import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ShowSelecter } from './ShowSelecter';

// import { db } from './../firebase.js';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// import { convertDate } from './../methods/index.js';
import { logIn } from './../actions/index.js';

export const Reservation = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [reservation, setReservation] = useState({
        masaje: "default",
        duracion: "default",
        dia: "default",
        horario: "default",
        cliente: "default"
    });

    // LOGICA PARA FINALIZAR LA RESERVA CUANDO LLEGA A HORARIOS

    function handleReservation(){
        dispatch(logIn());
        navigate('/datos_reserva');
    }

  return (
    <div className='flex flex-col items-center bg-violet-light bg-cover bg-no-repeat' style={{backgroundImage: 'url(./img/bg-card-violet.svg)'}}>
        <div className='w-[60vw]'>
            <h2 className='text-white0 text-3xl text-center my-10'>RESERVA TU PRÓXIMO MASAJE</h2>
            <ul className='flex w-full xl:gap-20 justify-center my-4 text-blue'>
                <li className={"w-1/4 border-2 border-blue p-2 " + (reservation.masaje !== 'default' ? 'bg-blue text-gray' : 'bg-violet-light')}>MASAJE</li>
                <li className={'w-1/4 border-2 border-blue p-2 ' + (reservation.duracion !== 'default' ? 'bg-blue text-gray' : 'bg-violet-light')}>DURACIÓN</li>
                <li className={'w-1/4 border-2 border-blue p-2 ' + (reservation.dia !== 'default' ? 'bg-blue text-gray' : 'bg-violet-light')}>DÍA</li>
                <li className={'w-1/4 border-2 border-blue p-2 ' + (reservation.horario !== 'default' ? 'bg-blue text-gray' : 'bg-violet-light')}>HORARIO</li>
            </ul>
        </div>
        {reservation.masaje !== 'default' &&
            // Object.values(reservation).map(value => (value !== 'default') && <p className='border-b-1 border-black'>{value}</p>)
            <div className='bg-black text-white p-2 rounded w-[50%]'>
                <p className='bg-green rounded-t text-center'>RESUMEN</p>
                <div className='flex flex-col gap-2 my-2'>
                    {Object.keys(reservation).map(value => (reservation[value] !== 'default') && <p className='text-sm border-b-1 border-green'>{`${reservation[value]}`}</p>)}
                    {reservation.horario !== 'default' &&
                        <div className='flex flex-col gap-2 text-sm text-white0'>
                            <button className='border-1 border-white0 p-2 rounded hover:bg-white0 hover:text-black duration-200'  onClick={() => handleReservation()}>Reservar</button>
                            <button className='border-1 border-white0 p-2 rounded hover:bg-white0 hover:text-black duration-200' onClick={() => setReservation({...reservation, horario: 'default'})}>Volver</button>
                        </div>
                    }
                </div>
            </div>
        }
        <ShowSelecter reservation={reservation} setReservation={setReservation}/>
    </div>
  )
}
