import React from 'react'
import { useState } from 'react'

import DatePicker from "react-datepicker"
import { registerLocale } from  "react-datepicker"
import es from 'date-fns/locale/es'
import "react-datepicker/dist/react-datepicker.css"

import { db } from './../firebase'
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore'

import { SelectMassage } from './Selectors/SelectMassage'

export const ShowSelecter = ({reservation, setReservation}) => {
    let days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    
    // FALTA LA LOGICA PARA PONER HORARIOS LUNES O MARTES / SABADOS O DOMINGOS
    let horariosLM = ['08:00hs', '08:30hs', '09:00hs', '09:30hs', '10:00hs', '10:30hs', '11:00hs'];

    const [horarios, setHorarios] = useState([]);

    async function handleAvailability(nombreDia, numMes, numDia){
        let horarios = [];
        console.log(nombreDia, numMes, numDia)
        const q = query(collection(db, "Disponibilidad"), where('nombreDia', '==', nombreDia), where('numDia', '==', numDia), where('numMes', '==', numMes));
        const querySnapshot = await getDocs(q);
        if(querySnapshot.empty){
            console.log('no existe ese documento con esa fecha')
            const docRef = await addDoc(collection(db, "Disponibilidad"), {
                nombreDia,
                numDia,
                numMes,
                horarios: horariosLM
              });
            handleAvailability(nombreDia, numMes, numDia)
        }else{
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data().horarios);
                horarios.push(doc.data().horarios);
            });
        }
        setHorarios(horarios[0])
    }

    registerLocale('es', es)
    let startDay = new Date();
    let lastDay = new Date(new Date().setMonth(new Date().getMonth() + 1));

    async function handleChangeDay(date){
        let nameDay = days[date.getDay()];
        let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1).toString();
        let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        setReservation({...reservation, day: `${nameDay} ${day}/${month}/${date.getFullYear()}`});
        setHorarios([])
        handleAvailability(nameDay, month, day)
    }

  return (
    <>
        <SelectMassage />
        {(reservation.massage_type !== 'default' && reservation.duration === 'default') &&
            <>
                <p className='text-center text-xl text-black my-6'>Seleccione la duración del masaje</p>
                <div className='flex flex-wrap justify-center gap-4 my-20'>
                    <div className='flex flex-col items-center gap-4 w-1/4 group'>
                        <button className='w-full text-center bg-black text-white p-2 rounded hover:shadow-xl duration-200' onClick={(e) => setReservation({...reservation, duration: '60 min'})}>60 minutos</button>
                        <span className='w-max bg-brown p-2 rounded text-sm opacity-0 group-hover:opacity-100 duration-200'>$40</span>
                    </div>
                    <div className='flex flex-col items-center gap-4 w-1/4 group'>
                        <button className='w-full text-center bg-black text-white p-2 rounded hover:shadow-xl duration-200' onClick={(e) => setReservation({...reservation, duration: '90 min'})}>90 minutos</button>
                        <span className='w-max bg-brown p-2 rounded text-sm opacity-0 group-hover:opacity-100 duration-200'>$55</span>
                    </div>
                </div>
                <button className='w-max text-green border-1 border-green p-2 rounded hover:bg-green hover:text-white duration-200' onClick={() => setReservation({...reservation, massage_type: 'default'})}>Volver</button>
            </>
        }
        {(reservation.duration !== 'default' && reservation.day === 'default') &&
            <div>
                <p className='text-center text-xl text-black my-6'>Seleccione el día</p>
                <DatePicker selected={startDay} onChange={(date) => handleChangeDay(date)} locale='es' dateFormat='dd/MM/yyyy' minDate={startDay} maxDate={lastDay} showIcon={true}/>
                <button className='text-green border-1 border-green p-2 rounded hover:bg-green hover:text-white duration-200' onClick={() => setReservation({...reservation, duration: 'default'})}>Volver</button>
            </div>
        }
        {/* HORARIO Y FINALIZAR SELECCION DE TIPO DE RESERVA */}
        {(reservation.day !== 'default') &&
            <div>
                {(reservation.hour === 'default') &&
                    <>
                        <p className='text-center text-xl text-black my-6'>Seleccione el horario</p>
                        <div className='flex flex-wrap justify-center gap-4 my-20'>
                            {horarios?.length > 0 && horarios.map((h, i) => 
                                <button className='w-1/4 text-center bg-black text-white p-2 rounded hover:shadow-xl duration-200' onClick={(e) => setReservation({...reservation, hour: e.target.innerHTML})} key={i}>{h}</button>
                            )}
                        </div>
                        <button className='w-1/4 text-green border-1 border-green p-2 rounded hover:bg-green hover:text-white duration-200' onClick={() => setReservation({...reservation, day: 'default'})}>Volver</button>
                    </>
                }
            </div>
        }
    </>
  )
}
