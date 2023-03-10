import { useState } from 'react';
import { useSelector } from 'react-redux';

export const FormReservation = () => {

    const user = useSelector(state => state.user);
    
    return (
        <div className='w-[70vw] mx-auto'>
            <p className='text-2xl text my-4 font-black'>Chequeá tus datos y confirma la reserva.</p>
            <div className='bg-white0 border-1 border-gray rounded p-2 shadow-lg'>
                <p className='text-xl border-b-1 border-gray pb-2 font-black'>Información personal</p>
                <div className="flex gap-2 flex-wrap my-4">
                    <div className='relative border-1 border-gray p-2 m-2'>
                        <label className='absolute top-[-10px] left-[20px] px-2 bg-white0 text-sm text-gray' htmlFor="name">
                            Nombre*
                        </label>
                        <input className='p-2 focus:outline-0' id='name' type="text" onChange={(e) => setUser({...user, name: e.target.value})} value={user?.name}></input>
                    </div>
                    <div className='relative border-1 border-gray p-2 m-2'>
                        <label className='absolute top-[-10px] left-[20px] px-2 bg-white0 text-sm text-gray' htmlFor="phone">
                            Teléfono*
                        </label>
                        <input className='p-2 focus:outline-0' id='phone' type="number" onChange={(e) => setUser({...user, phone: e.target.value})}></input>
                    </div>
                    <div className='relative border-1 border-gray p-2 m-2'>
                        <label className='absolute top-[-10px] left-[20px] px-2 bg-white0 text-sm text-gray' htmlFor="email">
                            Email*
                        </label>
                        <input className='p-2 focus:outline-0' id='email' type="text" onChange={(e) => setUser({...user, email: e.target.value})} value={user?.email}></input>
                    </div>
                </div>
            </div>
            <div className='flex gap-2 my-2'>
                <button className='w-1/4 text-brown border-1 border-black bg-black p-2 rounded hover:bg-blue hover:text-white0 duration-200' onClick={() => console.log('volver')}>Cancelar</button>
                <button className='w-1/4 text-brown border-1 border-black bg-black p-2 rounded hover:bg-blue hover:text-white0 duration-200'  onClick={() => console.log('fin reserva')}>Confirmar reserva</button>
            </div>
        </div>
    )
}
