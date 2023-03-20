import { useState, useEffect} from 'react'

import { useSelector } from 'react-redux'

import { getMassages } from './../../methods/index'

import { collection, doc, setDoc, addDoc, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from './../../firebase';

export const SelectMassage = () => {

    const [massages, setMassages] = useState([])

    const reservation = useSelector(state => state.reservation)

    console.log(massages)
    
    const getMassagesNow = async () => {
        let massages = [];
        const q = query(collection(db, 'Masajes'));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            massages.push(doc.data());
        });
        setMassages(massages)
    }

    useEffect(() => {
        getMassagesNow();
        console.log(massages)
    }, [])

  return (
    <div>
        {reservation.massage_type === 'default' &&
            <div className='my-8 select-none'>
                <p className='text-center text-xl text-black my-4'>Seleccione el tipo de masaje</p>
                { massages.length > 0 &&
                    massages.map((m, i) => 
                        <div className='flex flex-wrap justify-center gap-4 my-4' key={i}>
                            <button className='w-1/4 text-center bg-black text-white p-2 rounded hover:shadow-xl duration-200' onClick={(e) => setReservation({...reservation, massage_type: e.target.innerHTML})}>{m.type}</button>
                        </div>
                    )
                }
                {/* <div className='flex flex-wrap justify-center gap-4 my-4'>
                    <button className='w-1/4 text-center bg-black text-white p-2 rounded hover:shadow-xl duration-200' onClick={(e) => setReservation({...reservation, massage_type: e.target.innerHTML})}>Reiki</button>
                    <button className='w-1/4 text-center bg-black text-white p-2 rounded hover:shadow-xl duration-200' onClick={(e) => setReservation({...reservation, massage_type: e.target.innerHTML})}>Masaje descontracturante</button>
                    <button className='w-1/4 text-center bg-black text-white p-2 rounded hover:shadow-xl duration-200' onClick={(e) => setReservation({...reservation, massage_type: e.target.innerHTML})}>Masajes a embarazadas y a niños</button>
                    <button className='w-1/4 text-center bg-black text-white p-2 rounded hover:shadow-xl duration-200' onClick={(e) => setReservation({...reservation, massage_type: e.target.innerHTML})}>Drenaje linfático</button>
                    <button className='w-1/4 text-center bg-black text-white p-2 rounded hover:shadow-xl duration-200' onClick={(e) => setReservation({...reservation, massage_type: e.target.innerHTML})}>Reflexologia podal</button>
                    <button className='w-1/4 text-center bg-black text-white p-2 rounded hover:shadow-xl duration-200' onClick={(e) => setReservation({...reservation, massage_type: e.target.innerHTML})}>Exfoliación e hidratación</button>
                    <button className='w-1/4 text-center bg-black text-white p-2 rounded hover:shadow-xl duration-200' onClick={(e) => setReservation({...reservation, massage_type: e.target.innerHTML})}>Limpieza facial y drenaje</button>
                </div> */}
            </div>
        }
    </div>
  )
}
