import { useEffect} from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { changeReservation } from './../../actions/index'

import { ButtonGoBack } from './../../utilities/ButtonGoBack'

export const SelectHour = () => {

    const reservation = useSelector(state => state.reservation)
    const hours = useSelector(state => state.schedules)

    const dispatch = useDispatch();

    useEffect(() => {
    }, [])
    console.log(hours)
    return (
        <>
            {(reservation.day !== 'default' && reservation.hour === 'default') &&
                <>
                    <p className='w-max mx-auto p-1 border-b-blue border-b-1 text-blue text-xs font-thin'>Seleccione el horario</p>
                        <div className='flex flex-wrap justify-center gap-4 py-8 mx-auto'>
                            {hours?.length > 0 && hours.map((h, i) => 
                                <button className='w-1/4 text-center bg-black text-white p-2 rounded hover:shadow-xl duration-200' onClick={(e) => dispatch(changeReservation({...reservation, hour: e.target.innerHTML}))} key={i}>{h}</button>
                            )}
                        </div>
                        <ButtonGoBack toDefault={'day'} />
                </>
            }
        </>
    )
}
