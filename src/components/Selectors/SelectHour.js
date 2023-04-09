import { useEffect, useState} from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { changeReservation } from './../../actions/index'
import { getHours } from './../../methods/index'

import { ButtonGoBack } from './../../utilities/ButtonGoBack'

import { Ring } from '@uiball/loaders'

export const SelectHour = () => {

    const [hours, setHours] = useState('default')
    const [errorHour, setErrorHour] = useState(false)

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
            setErrorHour(false)
        }
    }, [reservation])

    console.log(hours)

    function handleChangeHour(h){
        const dateToCompare = new Date(`2000-01-01T${h}:00`)
        dateToCompare.setMinutes(dateToCompare.getMinutes() + 30)
        const nextTurn = dateToCompare.toString().split(' ')[4].slice(0, 5)

        if(+reservation.duration > 30 && !(hours.includes(nextTurn))){
            setErrorHour(true)
        }else{
            dispatch(changeReservation({...reservation, hour: h}))
        }
    }

    return (
        <>
            {(reservation.day !== 'default' && reservation.hour === 'default') &&
                <>
                    {errorHour && <p className='text-center bg-brown text-brown-dark p-2 text-xs md:text-sm'>Next shift is busy, select another schedule or a duration of 30 minutes or less.</p>}
                    <p className='w-max mx-auto p-1 border-b-blue border-b-1 text-blue text-xs font-thin'>Select the hour</p>
                        <div className='flex flex-wrap justify-center gap-4 py-8 mx-auto'>
                            {Array.isArray(hours) ?
                                hours?.length > 0 ? hours.map((h, i) => 
                                <button className='w-1/4 text-center bg-black text-white p-2 rounded hover:shadow-xl duration-200' onClick={(e) => handleChangeHour(h)} key={i}>{h}</button>
                                )
                                :
                                <p className='text-center'>No more times available, select another day.</p>
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
