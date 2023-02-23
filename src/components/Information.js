import React from 'react'

export const Information = () =>{
  return (
    <div className='flex gap-10 px-10 py-10 mt-10 justify-center bg-brown'>
        <div className='flex flex-col w-1/6 justify-center items-center gap-2'>
            <p className="bg-green text-brown text-3xl text-center font-rubik font-extrabold rounded-full leading-[100px] h-[100px] w-[100px]">01.</p>
            <p className='text-black'>Masaje descontracturante</p>
            <button className='bg-green text-brown p-2'>Ver más</button>
        </div>
        <div className='flex flex-col w-1/6 justify-center items-center gap-2'>
            <p className="bg-green text-brown text-3xl text-center font-rubik font-extrabold rounded-full leading-[100px] h-[100px] w-[100px]">02.</p>
            <p className='text-black'>Reiki</p>
            <button className='bg-green text-brown p-2'>Ver más</button>
        </div>
        <div className='flex flex-col w-1/6 justify-center items-center gap-2'>
            <p className="bg-green text-brown text-3xl text-center font-rubik font-extrabold rounded-full leading-[100px] h-[100px] w-[100px]">03.</p>
            <p className='text-black'>Drenaje linfático</p>
            <button className='bg-green text-brown p-2'>Ver más</button>
        </div>
        <div className='flex flex-col w-1/6 justify-center items-center gap-2'>
            <p className="bg-green text-brown text-3xl text-center font-rubik font-extrabold rounded-full leading-[100px] h-[100px] w-[100px]">04.</p>
            <p className='text-black'>Reflexología manual y podal</p>
            <button className='bg-green text-brown p-2'>Ver más</button>
        </div>
    </div>
  )
}