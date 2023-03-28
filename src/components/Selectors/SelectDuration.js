import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { changeReservation } from './../../actions/index'
import { getMassages } from './../../methods/index'

import { ButtonGoBack } from './../../utilities/ButtonGoBack'

export const SelectDuration = () => {

    const [durations, setDurations] = useState([])

    const reservation = useSelector(state => state.reservation)
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(reservation.massage !== 'default' && reservation.duration === 'default'){
            (async () => {
                let AllDataMassages = await getMassages()
                let massageSelected = AllDataMassages.filter(m => m.type === reservation.massage)
                setDurations(massageSelected[0]?.prices)
            })()
        }else{
            // Cleaning state when reservation change on goback button
            setDurations([])
        }
    }, [reservation])

    return (
        <>
            {(reservation.massage !== 'default' && reservation.duration === 'default') &&
                <>
                    <p className='w-max mx-auto p-1 border-b-blue border-b-1 text-blue text-xs font-thin'>Select the duration of the massage</p>
                    <div className='flex flex-wrap justify-center gap-4 my-8'>
                        {durations?.map((d,i) => 
                            <div className='flex flex-col items-center gap-4 w-1/4 group' key={i}>
                                <button className='w-full text-center bg-black text-white p-2 rounded hover:shadow-xl duration-200' onClick={(e) => dispatch(changeReservation({...reservation, duration: d.duration, price: d.price}))}>{d.duration}</button>
                                <span className='w-max bg-brown p-2 rounded text-sm opacity-0 group-hover:opacity-100 duration-200'>{d.price}€</span>
                            </div>
                        )}
                    </div>
                    <ButtonGoBack toDefault={'massage'} />
                </>
            }
        </>
    )
}
