import { useDispatch, useSelector } from 'react-redux'

import { changeReservation } from './../actions'

// BUTTON TO GO BACK IN THE RESERVATION SELECTION
export const ButtonGoBack = ({toDefault}) => {

    const dispatch = useDispatch()
    const reservation = useSelector(state => state.reservation)

    return (
        <button className='w-[120px] text-black border-1 border-black p-2 hover:bg-black hover:text-white0 duration-200' onClick={() => dispatch(changeReservation({...reservation, [toDefault]: 'default'}))}>Back</button>
    )
}
