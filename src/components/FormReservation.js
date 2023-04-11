import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeUser } from './../actions'

export const FormReservation = ({userData, setUserData, error, setError}) => {

    const dispatch = useDispatch()

    const user = useSelector(state => state.user);

    useEffect(()=>{
        setError(false)
    }, [user])
    
    return (
        <>
            <div className='relative sm:grow bg-white0 border-1 border-gray rounded p-4 pb-8 shadow-lg text-sm'>
                <p className='text-lg border-b-1 border-gray pb-2 font-black'>Personal information</p>
                <div className="flex gap-2 flex-wrap mt-4">
                    <div className='relative border-1 border-gray p-2 m-2 w-full md:w-max'>
                        <label className='absolute top-[-10px] left-[20px] px-2 bg-white0 text-xs text-gray' htmlFor="name">
                            Name*
                        </label>
                        <input className='p-2 focus:outline-0 w-full md:w-max' id='name' type="text" onChange={(e) => dispatch(changeUser({name: e.target.value}))} value={user.name}></input>
                    </div>
                    <div className='relative border-1 border-gray p-2 m-2 w-full group md:w-max'>
                        <label className='absolute top-[-10px] left-[20px] px-2 bg-white0 text-xs text-gray' htmlFor="phone">
                            Phone*
                        </label>
                        <input className='p-2 focus:outline-0 w-full md:w-max' id='phone' type="number" onChange={(e) => dispatch(changeUser({phone: e.target.value}))} value={user.phone}></input>
                        <span className='z-10 absolute left-[-1px] w-max bg-black px-2 rounded text-xs text-brown hidden group-hover:block duration-200'>{user.phone.length < 9 && 'Must have more than 8 digits, ' + (9 - user.phone.length) + ' to go'}</span>
                    </div>
                    <div className='relative border-1 border-gray p-2 m-2 w-full group md:w-max'>
                        <label className='absolute top-[-10px] left-[20px] px-2 bg-white0 text-xs text-gray' htmlFor="email">
                            Email*
                        </label>
                        <input className='p-2 focus:outline-0 w-full md:w-max' id='email' readOnly type="text" value={user.email}></input>
                        <span className='z-10 absolute left-[-1px] w-max bg-black px-2 rounded text-xs text-brown hidden group-hover:block duration-200'>You will receive the summary at this email</span>
                    </div>
                </div>
                {error && 
                    <p className='absolute bottom-0 bg-red text-black p-2 rounded-t-xl w-max text-xs mx-2'>Complete all fields to confirm</p>
                }
            </div>
        </>
    )
}
