import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getReservations } from './../methods'


export const MyReservations = () => {

    const user = useSelector(state => state.user)
    const [reservations, setReservations] = useState([])
    // const [showOptions, setShowOptions] = useState(true)

    useEffect(() =>{
        (async () => {
            const allReservations = await getReservations(user.email)
            setReservations(allReservations)
            // setShowOptions(compareDate(allReservations.day))
        })()
    }, [])

    function compareDate(date){
        let parts = date.split('/')
        let dateByParts = new Date(parts[2], parts[1] - 1, parts[0].split(' ')[1])
        let actualDate = new Date()
        console.log(parts)
        console.log(dateByParts.getTime())
        console.log(actualDate.getTime())
        if(dateByParts > actualDate){
            return true
        }else{
            return false
        }
    }

    return (
        <>
            <div className='w-full sm:w-[70vw] mx-auto py-20 border-b-gray border-b-1'>
                <div className="p-4 pb-8 text-sm">
                    <p className='text-lg border-b-1 border-gray pb-2 font-black'>My reservations</p>
                        {reservations.length > 0 &&
                            <div className='flex'>
                                {reservations.map((r, i) =>
                                    <div className='flex flex-col relative bg-white0 border-1 border-gray p-2 m-2 w-[200px] rounded overflow-hidden' key={i}>
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
                                                <button className='border-1 border-black bg-black text-white0 p-1 rounded hover:bg-white0 hover:text-black duration-200' onClick={() => handleLogOut()}>Cancel</button>
                                            </div>
                                        </div>
                                        }
                                        <img className='z-0 absolute bottom-[-35px] right-[-25px] w-[100px] object-cover' src={'./img/lotus-flower.png'} alt='lotus flower' />
                                    </div>
                                )}
                            </div>
                        }
                </div>
            </div>
        </>
    )
}
