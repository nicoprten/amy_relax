import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getSchedules, testing } from './../actions/index';

export const Schedules = () => {
    const dispatch = useDispatch();
    let schedules = useSelector(state => state.schedules);

    React.useEffect(() =>{
        dispatch(getSchedules());
    }, [])
    


    return (
        <div className="flex flex-col justify-center gap-2 mb-10 px-80 p-4 bg-brown text-white" id='turnos'>
            <div className='w-max'>
                <h2 className='text-black text-3xl'>TURNOS DISPONIBLES</h2>
                <p className='text-green text-[14px]'>Seleccione día y horario (dentro de los próximos 7 días).</p>
            </div>
            {schedules.length > 0 && schedules.map((s, i) =>
                <div className='flex gap-2 text-black font-rubik border-b-1 border-pink my-2' key={i}>
                    <div className='w-1/6 text-left pl-4'>
                        <p>{s.day}</p>
                        <p>{s.date}</p>
                    </div>
                    <div className='flex items-center gap-2 text-black text-[14px]'>
                        <p className='bg-pink rounded-t p-2 border-2 border-pink hover:cursor-pointer hover:bg-brown duration-200'>16:00hs - 17:00hs</p>
                        <p className='bg-pink rounded-t p-2 border-2 border-pink hover:cursor-pointer hover:bg-brown duration-200'>17:00hs - 18:00hs</p>
                        <p className='bg-pink rounded-t p-2 border-2 border-pink hover:cursor-pointer hover:bg-brown duration-200'>18:00hs - 19:00hs</p>
                    </div>
                </div>
            )}
        </div>
  )
}
