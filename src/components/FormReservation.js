import { useState } from 'react';




export const FormReservation = () => {



  return (
    <div>
        <div className="flex flex-col gap-2">
            <label className='flex flex-col gap-2' htmlFor="name">
                Nombre completo
                <input id='name' type="text" onChange={(e) => setUser({...user, name: e.target.value})}></input>
            </label>
            <label className='flex flex-col gap-2' htmlFor="phone">
                Celular
                <input id='phone' type="number" onChange={(e) => setUser({...user, phone: e.target.value})}></input>
            </label>
            <div className='flex gap-2'>
                <button className='w-1/4 text-green border-1 border-green p-2 rounded hover:bg-green hover:text-white duration-200' onClick={() => console.log('volver')}>Cancelar</button>
                <button className='w-1/4 text-green border-1 border-green p-2 rounded hover:bg-green hover:text-white duration-200'  onClick={() => console.log('fin reserva')}>Confirmar reserva</button>
            </div>
        </div>
    </div>
  )
}
