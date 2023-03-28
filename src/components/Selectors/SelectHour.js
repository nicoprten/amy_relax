import { useEffect, useState} from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { changeReservation } from './../../actions/index'
import { getHours } from './../../methods/index'

import { ButtonGoBack } from './../../utilities/ButtonGoBack'

export const SelectHour = () => {

    const [hours, setHours] = useState([])

    const reservation = useSelector(state => state.reservation)
    // const hours = useSelector(state => state.schedules)
    console.log(reservation.day)
    console.log(hours)
    const dispatch = useDispatch();

    useEffect(() => {
        if(reservation.day !== 'default' && reservation.hour === 'default'){
            (async () => {
                let nameDay = reservation.day.split(' ')[0]
                let numMonth = reservation.day.split(' ')[1].split('/')[1]
                let numDay = reservation.day.split(' ')[1].split('/')[0]
                console.log(nameDay)
                console.log(numMonth)
                console.log(numDay)
                setHours(await getHours(nameDay, numMonth, numDay))
            })()
        }
    }, [reservation])

    return (
        <>
            {(reservation.day !== 'default' && reservation.hour === 'default') &&
                <>
                    <p className='w-max mx-auto p-1 border-b-blue border-b-1 text-blue text-xs font-thin'>Select the hour</p>
                        <div className='flex flex-wrap justify-center gap-4 py-8 mx-auto'>
                            {hours?.length > 0 && hours.map((h, i) => 
                                <button className='w-1/4 text-center bg-black text-white p-2 rounded hover:shadow-xl duration-200' onClick={(e) => dispatch(changeReservation({...reservation, hour: h}))} key={i}>{h}</button>
                            )}
                        </div>
                        <ButtonGoBack toDefault={'day'} />
                </>
            }
        </>
    )
}
