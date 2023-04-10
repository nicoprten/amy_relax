import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getReservations, deleteReservation, getHours, changeHoursDay } from './../methods'

import { Ring } from '@uiball/loaders'

export const MyReservations = () => {

    const user = useSelector(state => state.user)
    const [reservations, setReservations] = useState('default')
    // STATE FOR HANDLE NEW AND OLD RESERVATIONS
    const [showSelect, setShowSelect] = useState('new')

    useEffect(() =>{
        (async () => {
            let allReservations = await getReservations(user.email)
            if(showSelect === 'new'){
                allReservations = allReservations.filter(r => filterReservationByDate(r.day, r.hour))
            }else{
                allReservations = allReservations.filter(r => !filterReservationByDate(r.day, r.hour))
            }
            setReservations(allReservations)
        })()
        return(() => setReservations('default'))
    }, [showSelect])

    // To check if there are 2 days left for the reservation and to be able to cancel it
    function compareDate(date){
        let parts = date.split('/')
        let reservationDate = new Date(parts[2], parts[1] - 1, parts[0].split(' ')[1])
        let limitDate = new Date(reservationDate)
        limitDate.setDate(reservationDate.getDate() - 1)
        let actualDate = new Date()
        if(reservationDate > actualDate && actualDate < limitDate){
            return true
        }else{
            return false
        }
    }

    function filterReservationByDate(date, hour){
        let parts = date.split('/')
        let reservationDate = new Date(parts[2], parts[1] - 1, parts[0].split(' ')[1])
        reservationDate.setHours(hour.split(':')[0])
        reservationDate.setMinutes(hour.split(':')[1])
        let actualDate = new Date()
        if(reservationDate >= actualDate){
            return true
        }else{
            return false
        }
    }

    async function handleCancelReservation(reservation){
        console.log(reservation.id)
        let nameDay = reservation.day.split(' ')[0]
        let numMonth = reservation.day.split(' ')[1].split('/')[1]
        let numDay = reservation.day.split(' ')[1].split('/')[0]
        let schedules = await getHours(nameDay, numMonth, numDay)
        console.log(schedules)
        console.log(reservation.duration)
        console.log(reservation.hour)
        if(+reservation.duration > 30){
            const dateNextTurn = new Date(`2000-01-01T${reservation.hour}:00`)
            dateNextTurn.setMinutes(dateNextTurn.getMinutes() + 30)
            const hourNextTurn = dateNextTurn.toString().split(' ')[4].slice(0, 5)
            console.log(hourNextTurn)
            schedules.push(reservation.hour, hourNextTurn)
        }else{
            schedules.push(reservation.hour)
        }
        await changeHoursDay(nameDay, numMonth, numDay, schedules)
        deleteReservation(reservation.id)
        setReservations(reservations.filter(r => r.id !== reservation.id))
    }

    return (
        <>
            <div className='w-full sm:w-[70vw] mx-auto pt-20 border-b-gray border-b-1'>
                <div className="py-12 mx-4 text-sm">
                    <h2 className='text-lg font-black'>My reservations</h2>
                    <p className='text-brown-dark text-xs border-b-1 border-gray pb-2 '>You can cancel your reservation up to 2 days before the date</p>
                    <div className='flex'>
                        <button className={'mt-4 w-max p-2 border-1 border-black' + (showSelect === 'new' && ' bg-black text-gray0')} onClick={() => setShowSelect('new')}>Next reservations</button>
                        <button className={'mt-4 w-max p-2 border-1 border-black' + (showSelect === 'old' && ' bg-black text-gray0')} onClick={() => setShowSelect('old')}>Old reservations</button>
                    </div>
                        {Array.isArray(reservations) ?
                            reservations.length > 0 ?
                                <>
                                    <div className='flex flex-wrap my-4 flex-col items-center sm:flex-row'>
                                        {reservations.map((r, i) =>
                                            <div className='flex flex-col relative bg-white0 border-1 border-gray p-2 m-2 min-w-[200px] max-w-[200px] h-[318px] rounded overflow-hidden' key={i}>
                                                <div className='border-b-1 border-gray p-2'>
                                                    <p className='text-xs text-brown-dark'>CLIENT</p>
                                                    <p className=''>{r.client.name}</p>
                                                </div>
                                                <div className='border-b-1 border-gray p-2'>
                                                    <p className='text-xs text-brown-dark'>DATE</p>
                                                    <p className=''>{r.day} - {r.hour}</p>
                                                </div>
                                                <div className='p-2'>
                                                    <p className='text-xs text-brown-dark'>DETAILS</p>
                                                    <p className=''>{r.massage}</p>
                                                    <p className=''>{r.duration}m</p>
                                                    <p className=''>{r.price}€</p>
                                                </div>
                                                {compareDate(r.day) &&
                                                <div className='flex flex-col gap-2 p-2'>
                                                    <p className='text-xs text-brown-dark'>You still have time to change or cancel the reservation</p>
                                                    <div className='flex gap-1 text-xs z-10'>
                                                        <button className='border-1 border-black bg-black text-white0 p-1 rounded hover:bg-white0 hover:text-black duration-200' onClick={() => console.log('mis reservas direction')}>Contact</button>
                                                        <button className='border-1 border-black bg-black text-white0 p-1 rounded hover:bg-white0 hover:text-black duration-200' onClick={() => handleCancelReservation(r)}>Cancel</button>
                                                    </div>
                                                </div>
                                                }
                                                <img className='z-0 absolute bottom-[-35px] right-[-25px] w-[100px] object-cover' src={'./img/lotus-flower.png'} alt='lotus flower' />
                                            </div>
                                        )}
                                    </div>
                                </>
                            :
                                <div className='flex justify-center h-[43vh] items-center'>
                                    <p className='text-center leading-[5vh]'>You don´t have any reservation yet, you can do one <Link className='p-2 bg-brown-dark text-white0' to={'/'} onClick={() => localStorage.setItem('scrollToReserve', true)}>here.</Link></p>    
                                </div>
                        :
                            <div className='flex justify-center h-[43vh] items-center'>
                                <Ring size={35} color="#030303" />
                            </div>
                        }
                </div>
            </div>
        </>
    )
}
