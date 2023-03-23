import { useState, useEffect} from 'react'

import { getMassages } from './../methods/index'

export const Information = () =>{

    const [massages, setMassages] = useState([])
    const [readMore, setReadMore] = useState([])

    useEffect(() => {
        (async () => {
            const allMassages = await getMassages()
            allMassages.map(m => setReadMore((prevState) => [...prevState, 110]))
            setMassages(allMassages)
            // setReadMore(new Array(allMassages.length))
        })()
    }, [])

    function handleSeeMore(i, length){
        let seeMore = readMore.slice();
        seeMore[i] = length
        setReadMore(seeMore)
    }

    return (
        <div className='bg-violet-light rounded-xl'>
            {massages.length > 0 ?
                <div className='w-[60vw] mx-auto py-10 flex flex-wrap justify-start gap-2'>
                    {massages.map((m, i) => 
                        <div className='relative bg-white0 w-1/4 h-max rounded-xl' key={i}>
                            <img className='rounded-t-xl w-full h-[150px] object-cover' src={m.image} alt={m.type} />
                            <div className='absolute top-2 right-2 flex flex-col gap-2 text-xs'>
                                {m.prices?.map((p,i) => 
                                    <p className='w-max bg-violet text-white0 rounded-l p-1' key={i}>{p.duration}´ {p.price}€</p>    
                                )}
                            </div>
                            <h3 className='relative w-max rounded bg-gray0 font-bold text-md mx-2 p-2 mt-[-20px]'>{m.type}</h3>
                            <p className='text-sm p-2'>{m.description.slice(0, readMore[i])}{m.description.length > readMore[i] && <button className='text-xs text-violet-light' onClick={() => handleSeeMore(i, m.description.length)}> ...read more</button>}</p>
                            <button className='absolute border-2 border-l-0 border-blue top-4 left-0 bg-blue text-white0 py-1 px-4  hover:bg-white0 hover:text-blue duration-200'>BOOK</button>
                        </div>
                    )}
                </div>
            :
                <p className='p-4 text-center'>Waiting...</p>
            }
        </div>
    )
}