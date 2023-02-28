import React from 'react'
import { useState } from 'react';

import DatePicker from "react-datepicker";
import { registerLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';

import "react-datepicker/dist/react-datepicker.css";

export const ShowSelecter = ({reservation, setReservation}) => {
    let days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    console.log(reservation)

    registerLocale('es', es)
    let startDay = new Date();
    let lastDay = new Date(new Date().setMonth(new Date().getMonth() + 1));

    function handleChangeDay(date){
        console.log(date.getDate())
        console.log((days[date.getDay()]))
        if(date.getDay() !== 3 && date.getDay() !== 4 && date.getDay() !== 5){
            let nameDay = days[date.getDay()];
            let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
            let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
            setReservation({...reservation, dia: `${nameDay} ${day}/${month}/${date.getFullYear()}`})
        }else{
            console.log('no puedes seleccionar ese dia')
            setReservation({...reservation, dia:'default'})
        }
    }

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
                <DatePicker selected={startDay} onChange={(date) => handleChangeDay(date)} locale='es' dateFormat='dd/MM/yyyy' minDate={startDay} maxDate={lastDay} showIcon={true}/>
                <button className='text-green border-1 border-green p-2 rounded hover:bg-green hover:text-white duration-200' onClick={() => setReservation({...reservation, duracion: 'default'})}>Volver</button>
            </div>
        }
        {(reservation.dia !== 'default' && reservation.horario === 'default') &&
            <div>
                <p className='text-center text-xl text-gray my-6'>Seleccione el horario</p>
                <button className='w-max text-green border-1 border-green p-2 rounded hover:bg-green hover:text-white duration-200' onClick={() => setReservation({...reservation, dia: 'default'})}>Volver</button>
            </div>
        }
        {(reservation.horario !== 'default' && reservation.cliente === 'default') &&
            <div>
                <p className='text-center text-xl text-gray my-6'>Completa con sus datos por favor.</p>
                <button className='w-max text-green border-1 border-green p-2 rounded hover:bg-green hover:text-white duration-200' onClick={() => setReservation({...reservation, horario: 'default'})}>Volver</button>
            </div>
        }
    </div>
  )
}
