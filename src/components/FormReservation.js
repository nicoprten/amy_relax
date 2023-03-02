import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const FormReservation = ({reservation, setReservation}) => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: '',
        phone: '',
        email: '',
        image: ''
    });

    function handleReservation(){
        // console.log(user)
        console.log(JSON.parse(localStorage.getItem('user')))
        if(JSON.parse(localStorage.getItem('user')) === null){
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const userGoogle = result.user;
                console.log(userGoogle)
                setUser({...user, email: userGoogle.email, image: userGoogle.photoURL});
                localStorage.setItem('user', JSON.stringify({...user, email: userGoogle.email, image: userGoogle.photoURL}));
                navigate('/datos_reserva');
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
        }else{
            navigate('/datos_reserva');
        }
    }

  return (
    <div>
        <div className="flex flex-col gap-2">
            <label className='flex flex-col gap-2' htmlFor="name">
                Nombre completo
                <input id='name' type="text" onChange={(e) => setUser({...user, name: e.target.value})}></input>
            </label>
            <label className='flex flex-col gap-2' htmlFor="phone">
                Celular
                <input id='phone' type="number" onChange={(e) => setUser({...user, phone: e.target.value})}></input>
            </label>
            <div className='flex gap-2'>
                <button className='w-1/4 text-green border-1 border-green p-2 rounded hover:bg-green hover:text-white duration-200' onClick={() => setReservation({...reservation, horario: 'default'})}>Volver</button>
                <button className='w-1/4 text-green border-1 border-green p-2 rounded hover:bg-green hover:text-white duration-200'  onClick={() => handleReservation()}>Continuar</button>
            </div>
        </div>
    </div>
  )
}
