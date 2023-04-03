import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { ShowSelecters } from './ShowSelecters'

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
        navigate('/reservation_resume');
    }

  return (
    <div className='flex flex-col bg-violet-light bg-cover bg-no-repeat' style={{backgroundImage: 'url(./img/bg-brown-reservation.jpg)'}}>
        <div className='md:w-[60vw] w-full px-8 md:px-0 mx-auto'>
            <h2 className='text-blue sm:text-3xl text-xl text-center my-10 bg-brown p-2 rounded'>BOOK YOUR NEXT MASSAGE</h2>
            <ul className='flex w-full justify-center my-4 text-blue text-sm sm:text-base'>
                <li className={"flex items-center gap-2 w-1/4 border-2 border-brown p-2 " + (reservation.massage !== 'default' ? 'bg-black text-gray' : 'bg-brown')}>
                    <p>TYPE</p>
                    <CaretDoubleRight className='hidden sm:block' size={22} />
                </li>
                <li className={'flex items-center gap-2 w-1/4 border-2 border-l-0 border-brown p-2 ' + (reservation.duration !== 'default' ? 'bg-black text-gray' : 'bg-brown')}>
                    <p>DURATION</p>
                    <CaretDoubleRight className='hidden sm:block' size={22} />
                </li>
                <li className={'flex items-center gap-2 w-1/4 border-2 border-l-0 border-brown p-2 ' + (reservation.day !== 'default' ? 'bg-black text-gray' : 'bg-brown')}>
                    <p>DAY</p>
                    <CaretDoubleRight className='hidden sm:block' size={22} />
                </li>
                <li className={'flex items-center gap-2 w-1/4 border-2 border-l-0 border-brown p-2 ' + (reservation.hour !== 'default' ? 'bg-black text-gray' : 'bg-brown')}>
                    <p>HOUR</p>
                </li>
            </ul>
        </div>
        {/* RESUME BOOK MASSAGE */}
        {reservation.massage !== 'default' &&
            <div className='flex flex-col xl:flex-row md:w-[60vw] w-full px-8 md:px-0 mx-auto justify-between'>
                <div className='flex items-start md:w-max bg-black shadow-xl mb-4 text-white text-xs border-8 border-black rounded'>
                    <p className='text-center p-2'>RESERVATION DETAILS</p>
                    <div className='flex flex-col gap-2 px-8 w-full'>
                        {Object.keys(reservation).map((value, i) => (reservation[value] !== 'default') && <p className='text-brown p-2 border-b-1 border-violet-light' key={i}>{value.charAt(0).toUpperCase() + value.slice(1)}: {reservation[value]}</p>)}
                    </div>
                </div>
                {reservation.hour !== 'default' &&
                    <div className='flex flex-col gap-2 text-sm text-white0 sm:w-[120px] w-full'>
                        <button className='border-1 border-black text-black p-2 hover:bg-black hover:text-white0 duration-200'  onClick={() => handleReservation()}>BOOK</button>
                        <ButtonGoBack toDefault={'hour'} />
                    </div>
                }
            </div>
        }
        <ShowSelecters />
    </div>
  )
}
