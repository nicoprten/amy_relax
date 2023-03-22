import { useState, useEffect} from 'react'

import { getMassages } from './../methods/index'

export const Information = () =>{

    const [massages, setMassages] = useState([])
    
    const getMassagesNow = async () => {
        setMassages(await getMassages())
    }

    useEffect(() => {
        getMassagesNow();
    }, [])
    console.log(massages)
    return (
        <div className='bg-violet'>
            {massages.length > 0 ?
                <div className='w-[60vw] mx-auto py-10 flex flex-wrap gap-2'>
                    {massages.map((m, i) => 
                        <div className='bg-gray p-2 w-[250px]'>
                            <h3>{m.type}</h3>
                            <p>{m.description}</p>
                        </div>
                    )}
                </div>
            :
                <p>Waiting...</p>
            }
        </div>
    )
}