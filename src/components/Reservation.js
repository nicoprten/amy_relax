import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { ShowSelecter } from './ShowSelecter'

import { logIn, newReservation } from './../actions/index.js'

import { CaretDoubleRight } from 'phosphor-react'

export const Reservation = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [reservation, setReservation] = useState({
        massage_type: "default",
        duration: "default",
        day: "default",
        hour: "default",
        client: "default"
    });

    // LOGICA PARA FINALIZAR LA RESERVA CUANDO LLEGA A HORARIOS

    function handleReservation(){
        dispatch(newReservation(reservation));
        dispatch(logIn());
        navigate('/datos_reserva');
    }

  return (
    <div className='flex flex-col bg-violet-light bg-cover bg-no-repeat' style={{backgroundImage: 'url(./img/bg-card-violet.svg)'}}>
        <div className='w-[60vw] mx-auto'>
            <h2 className='text-blue text-3xl text-center my-10 bg-violet-light p-2 rounded'>BOOK YOUR NEXT MASSAGE</h2>
            <ul className='flex w-full justify-center my-4 text-blue'>
                <li className={"flex items-center gap-2 w-1/4 border-2 border-blue p-2 " + (reservation.massage_type !== 'default' ? 'bg-blue text-gray' : 'bg-violet-light')}>
                    <p>TYPE</p>
                    <CaretDoubleRight size={22} />
                </li>
                <li className={'flex items-center gap-2 w-1/4 border-2 border-l-0 border-blue p-2 ' + (reservation.duration !== 'default' ? 'bg-blue text-gray' : 'bg-violet-light')}>
                    <p>DURATION</p>
                    <CaretDoubleRight size={22} />
                </li>
                <li className={'flex items-center gap-2 w-1/4 border-2 border-l-0 border-blue p-2 ' + (reservation.day !== 'default' ? 'bg-blue text-gray' : 'bg-violet-light')}>
                    <p>DAY</p>
                    <CaretDoubleRight size={22} />
                </li>
                <li className={'flex items-center gap-2 w-1/4 border-2 border-l-0 border-blue p-2 ' + (reservation.hour !== 'default' ? 'bg-blue text-gray' : 'bg-violet-light')}>
                    <p>HOUR</p>
                </li>
            </ul>
        </div>
        {reservation.massage_type !== 'default' &&
            <div className='flex flex-col bg-blue shadow-xl w-[60vw] mx-auto mb-4 rounded'>
                <div className='flex text-white'>
                    <p className='bg-black rounded-t text-center p-2'>RESERVATION DETAILS</p>
                    <div className='flex flex-col gap-2 my-2 p-2 px-8 w-full'>
                        {Object.keys(reservation).map(value => (reservation[value] !== 'default') && <p className='text-sm p-2 border-b-1 border-black'>{`${reservation[value]}`}</p>)}
                    </div>
                </div>
                {reservation.hour !== 'default' &&
                    <div className='flex flex-col text-sm text-white0'>
                        <button className='bg-blue border-1 border-blue p-2 hover:bg-white0 hover:text-black duration-200'  onClick={() => handleReservation()}>BOOK</button>
                        <button className='bg-blue border-1 border-blue p-2 hover:bg-white0 hover:text-black duration-200' onClick={() => setReservation({...reservation, hour: 'default'})}>BACK</button>
                    </div>
                }
            </div>
        }
        <ShowSelecter reservation={reservation} setReservation={setReservation}/>
    </div>
  )
}
