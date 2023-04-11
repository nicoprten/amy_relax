import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { postReservation } from './../methods'
import { deleteReservation } from './../actions'

import emailjs from '@emailjs/browser';

import { FormReservation } from './FormReservation';
import { ResumeReservation } from './ResumeReservation';

import { Ring } from '@uiball/loaders'

export const FinalReservation = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user);

    const [error, setError] = useState(false)
    
    async function handleFinalReservation(email, phone, name){
        if(email !== '' && phone.toString().length > 8 && name !== ''){
            setError(false)
            let finalReservation = {
                ...JSON.parse(localStorage.getItem('reservation')),
                client: {email, phone, name} 
            }
            postReservation(finalReservation)

            // SEND EMAIL WITH RESERVATION DATA
            emailjs.send('service_5vfkz77', 'template_9evw2nf', {finalReservation}, 'jjazvefRc2dS1o_NG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            localStorage.removeItem('reservation');
            dispatch(deleteReservation())
            navigate('/reservations')
        }else{
            setError(true)
        }
    }

    function handleCancel(){
        localStorage.removeItem('reservation');
        dispatch(cancelReservation())
        navigate('/')
    }

  return (
    <div className="w-full sm:w-[70vw] mx-auto pt-16 pb-8 border-b-gray border-b-1 overflow-hidden">
        {(user && JSON.parse(localStorage.getItem('reservation'))) ?
            <>
                <p className='text-sm md:text-2xl text-center md:text-left text my-4 font-black'>Check the reservation and confirm</p>
                <div className='flex flex-wrap md:flex-nowrap my-4 gap-4 mx-4 sm:mx-0 justify-between'>
                    <ResumeReservation />
                    <FormReservation error={error} setError={setError}/>
                </div>
                <p className='bg-brown text-brown-dark p-2 mx-4 sm:mx-0 rounded-xl w-max text-xs'>No advance payment is required</p>
                <p className='bg-brown text-brown-dark p-2 mx-4 sm:mx-0 rounded-xl w-max text-xs mt-2'>Check if you have received the email in your spam folder</p>
                <div className='flex flex-wrap flex-wrap-reverse gap-2 my-4 mx-4 sm:mx-0'>
                    <button className='sm:w-1/4 w-full text-black border-1 border-black bg-transparent p-2 hover:bg-black hover:text-white0 duration-200' onClick={() => handleCancel()}>Cancel</button>
                    <button className='sm:w-1/4 w-full text-black border-1 border-black bg-transparent p-2 hover:bg-black hover:text-white0 duration-200'  onClick={() => handleFinalReservation(user.email, user.phone, user.name)}>Confirm</button>
                </div>
            </>
        :
            user === 'none' ?
                <p>You need to log in to confirm the reservation.</p>
            :
                <Ring size={35} color="#030303" />
        }
    </div>
  )
}
