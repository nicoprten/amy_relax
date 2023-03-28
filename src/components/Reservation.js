import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { ShowSelecter } from './ShowSelecter'

import { logIn, changeReservation } from './../actions/index.js'

import { CaretDoubleRight } from 'phosphor-react'
import { ButtonGoBack } from '../utilities/ButtonGoBack'

export const Reservation = () => {

    const navigate = useNavigate();
    const reservation = useSelector(state => state.reservation)
    const dispatch = useDispatch();

    // LOGICA PARA FINALIZAR LA RESERVA CUANDO LLEGA A HORARIOS

    function handleReservation(){
        dispatch(logIn());
        navigate('/datos_reserva');
    }

  return (
    <div className='flex flex-col bg-violet-light bg-cover bg-no-repeat' style={{backgroundImage: 'url(./img/bg-card-violet.svg)'}}>
        <div className='w-[60vw] mx-auto'>
            <h2 className='text-blue text-3xl text-center my-10 bg-violet-light p-2 rounded'>BOOK YOUR NEXT MASSAGE</h2>
            <ul className='flex w-full justify-center my-4 text-blue'>
                <li className={"flex items-center gap-2 w-1/4 border-2 border-blue p-2 " + (reservation.massage !== 'default' ? 'bg-blue text-gray' : 'bg-violet-light')}>
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
        {/* RESUME BOOK MASSAGE */}
        {reservation.massage !== 'default' &&
            <div className='flex flex-col xl:flex-row w-[60vw] mx-auto justify-between'>
                <div className='flex items-start w-max bg-blue shadow-xl mb-4 text-white text-xs border-8 border-blue rounded'>
                    <p className='text-center p-2'>RESERVATION DETAILS</p>
                    <div className='flex flex-col gap-2 px-8 w-full'>
                        {Object.keys(reservation).map((value, i) => (reservation[value] !== 'default') && <p className='text-violet-light p-2 border-b-1 border-violet-light' key={i}>{value.charAt(0).toUpperCase() + value.slice(1)}: {reservation[value]}</p>)}
                    </div>
                </div>
                {reservation.hour !== 'default' &&
                    <div className='flex flex-col gap-2 text-sm text-white0 w-[120px]'>
                        <button className='border-1 border-black text-black p-2 hover:bg-black hover:text-white0 duration-200'  onClick={() => handleReservation()}>BOOK</button>
                        <ButtonGoBack toDefault={'hour'} />
                    </div>
                }
            </div>
        }
        <ShowSelecter />
    </div>
  )
}
