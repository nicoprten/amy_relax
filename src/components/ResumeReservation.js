import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const ResumeReservation = () => {

    const [reservation, setReservation] = useState({})

    const user = useSelector(state => state.user);
    // const reservation = useSelector(state => state.reservation);

    useEffect(() => {
        setReservation(JSON.parse(localStorage.getItem('reservation')))
    }, [])
    
    return (
        <>
            <div className='relative min-w-[270px] sm:grow-0 grow bg-white0 border-1 border-gray rounded p-4 shadow-lg text-sm overflow-hidden'>
                <p className='text-lg border-b-1 border-gray pb-2 font-black'>Reservation resume</p>
                <div className="flex justify-between items-center p-1 m-2">
                    <p className='bg-black p-2 text-white0'>Day</p>
                    <p className=''>{reservation.day}</p>
                </div>
                <div className="flex justify-between items-center p-1 m-2">
                    <p className='bg-black p-2 text-white0'>Hour</p>
                    <p className=''>{reservation.hour} hs</p>
                </div>
                <div className="flex justify-between items-center p-1 m-2">
                    <p className='bg-black p-2 text-white0'>Massage</p>
                    <p className=''>{reservation.massage}</p>
                </div>
                <div className="flex justify-between items-center p-1 m-2">
                    <p className='bg-black p-2 text-white0'>Duration</p>
                    <p className=''>{reservation.duration} m</p>
                </div>
                <div className="flex justify-between items-center p-1 m-2">
                    <p className='bg-black p-2 text-white0'>Price</p>
                    <p className=''>€ {reservation.price}</p>
                </div>
                <img className='z-0 absolute bottom-[-40px] right-[-25px] w-[100px] object-cover' src={'./img/lotus-flower.png'} alt='lotus flower' />
            </div>
        </>
    )
}
