import { useState, useEffect} from 'react'

import { useSelector } from 'react-redux'

import { getMassages } from './../../methods/index'

export const SelectMassage = () => {

    const [massages, setMassages] = useState([])

    const reservation = useSelector(state => state.reservation)
    
    const getMassagesNow = async () => {
        setMassages(await getMassages())
    }

    useEffect(() => {
        getMassagesNow();
    }, [])

  return (
    <>
        <p className='text-center text-xl text-black my-4'>Seleccione el tipo de masaje</p>
        {reservation.massage_type === 'default' &&
            <div className='flex flex-wrap justify-center gap-4 my-8 w-[60vw] mx-auto'>
                { massages.length > 0 &&
                    massages.map((m, i) => 
                        <button className='h-full w-[220px] text-center bg-black text-white p-2 rounded hover:shadow-xl duration-200' onClick={(e) => setReservation({...reservation, massage_type: e.target.innerHTML})}>{m.type}</button>
                    )
                }
            </div>
        }
    </>
  )
}
