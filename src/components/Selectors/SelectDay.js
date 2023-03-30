import { useSelector, useDispatch } from 'react-redux'

import { changeReservation, setSchedules } from './../../actions/index'

import { setDay, createHours } from './../../methods'

import { ButtonGoBack } from './../../utilities/ButtonGoBack'

import DatePicker, { registerLocale } from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import es from "date-fns/locale/es"; // the locale you want
registerLocale("es", es); // register it with the name you want

export const SelectDay = () => {

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let horariosLM = ['08:00hs', '08:30hs', '09:00hs', '09:30hs', '10:00hs', '10:30hs', '11:00hs'];

    let startDay = new Date();
    let lastDay = new Date(new Date().setMonth(new Date().getMonth() + 1));

    const reservation = useSelector(state => state.reservation)
    const dispatch = useDispatch();

    async function selectDay(date){
        let nameDay = days[date.getDay()];
        let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1).toString();
        let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

        let hours = []
        if(nameDay === days[1] || nameDay === days[2]){
            hours = createHours({from: 8, until: 20})
        }else{
            hours = createHours({from: 8, until: 10})
        }
        await setDay(nameDay, month, day, hours)
        dispatch(changeReservation({...reservation, day: `${nameDay} ${day}/${month}/${date.getFullYear()}`}));
    }    

    return (
        <>
            {(reservation.duration !== 'default' && reservation.day === 'default') &&
                <>
                    <p className='w-max mx-auto p-1 border-b-blue border-b-1 text-blue text-xs font-thin'>Select the day</p>
                    <div className='relative flex flex-wrap justify-center gap-4 py-8 mx-auto'>
                        <DatePicker className='bg-black text-white0 rounded p-2 w-[100px] mx-auto focus:outline-0' selected={startDay} onChange={(date) => selectDay(date)} locale='es' dateFormat='dd/MM/yyyy' minDate={startDay} maxDate={lastDay} showIcon={true}/>
                    </div>
                    <ButtonGoBack toDefault={'duration'} />
                </>
            }
        </>
    )
}
