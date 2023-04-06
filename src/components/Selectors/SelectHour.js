import { useEffect, useState} from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { changeReservation } from './../../actions/index'
import { getHours } from './../../methods/index'

import { ButtonGoBack } from './../../utilities/ButtonGoBack'

import { Ring } from '@uiball/loaders'

export const SelectHour = () => {

    const [hours, setHours] = useState('default')

    const reservation = useSelector(state => state.reservation)
    const dispatch = useDispatch();

    useEffect(() => {
        if(reservation.day !== 'default' && reservation.hour === 'default'){
            (async () => {
                let nameDay = reservation.day.split(' ')[0]
                let numMonth = reservation.day.split(' ')[1].split('/')[1]
                let numDay = reservation.day.split(' ')[1].split('/')[0]
                setHours(await getHours(nameDay, numMonth, numDay))
            })()
        }
        return () => {
            setHours('default')
        }
    }, [reservation])

    return (
        <>
            {(reservation.day !== 'default' && reservation.hour === 'default') &&
                <>
                    <p className='w-max mx-auto p-1 border-b-blue border-b-1 text-blue text-xs font-thin'>Select the hour</p>
                        <div className='flex flex-wrap justify-center gap-4 py-8 mx-auto'>
                            {Array.isArray(hours) ?
                                hours?.length > 0 ? hours.map((h, i) => 
                                <button className='w-1/4 text-center bg-black text-white p-2 rounded hover:shadow-xl duration-200' onClick={(e) => dispatch(changeReservation({...reservation, hour: h}))} key={i}>{h}</button>
                                )
                                :
                                <p>No more times available, select another day.</p>
                            :
                                <Ring size={35} color="#030303" />
                            }
                        </div>
                        <ButtonGoBack toDefault={'day'} />
                </>
            }
        </>
    )
}
