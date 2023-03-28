import { useState } from 'react';
import { useSelector } from 'react-redux';

export const FormReservation = () => {

    const user = useSelector(state => state.user);
    
    return (
        <>
            <div className='bg-white0 border-1 border-gray rounded p-4 shadow-lg'>
                <p className='text-xl border-b-1 border-gray pb-2 font-black'>Personal information</p>
                <div className="flex gap-2 flex-wrap mt-4">
                    <div className='relative border-1 border-gray p-2 m-2 w-full md:w-max'>
                        <label className='absolute top-[-10px] left-[20px] px-2 bg-white0 text-sm text-gray' htmlFor="name">
                            Name*
                        </label>
                        <input className='p-2 focus:outline-0 w-full md:w-max' id='name' type="text" onChange={(e) => setUser({...user, name: e.target.value})} value={user?.name}></input>
                    </div>
                    <div className='relative border-1 border-gray p-2 m-2 w-full md:w-max'>
                        <label className='absolute top-[-10px] left-[20px] px-2 bg-white0 text-sm text-gray' htmlFor="phone">
                            Phone*
                        </label>
                        <input className='p-2 focus:outline-0 w-full md:w-max' id='phone' type="number" onChange={(e) => setUser({...user, phone: e.target.value})}></input>
                    </div>
                    <div className='relative border-1 border-gray p-2 m-2 w-full md:w-max'>
                        <label className='absolute top-[-10px] left-[20px] px-2 bg-white0 text-sm text-gray' htmlFor="email">
                            Email*
                        </label>
                        <input className='p-2 focus:outline-0 w-full md:w-max' id='email' type="text" onChange={(e) => setUser({...user, email: e.target.value})} value={user?.email}></input>
                    </div>
                </div>
            </div>
        </>
    )
}
