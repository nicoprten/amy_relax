import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { convertDate } from "./../methods/index.js";

export function getSchedules(){
    let days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let dateNow = new Date();
    let weekDays = Array(7).fill(new Date(dateNow)).map((d, i) => new Date(d.setDate(d.getDate() + 1)));
    let weekDaysParse = weekDays.map(d => (
        {
            day: days[d.getDay()],
            date: `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
        }
    ));
    return {
        type: 'SCHEDULES', 
        payload: weekDaysParse
    }
}

export function logIn(){
    return async function (dispatch){
        if(JSON.parse(localStorage.getItem('user')) === null){
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        return await signInWithPopup(auth, provider)
        .then((r) =>{
            const credential = GoogleAuthProvider.credentialFromResult(r);
            const token = credential.accessToken;
            const userGoogle = r.user;
            let userCreated = convertDate(userGoogle.metadata.createdAt);
            let user = {email: userGoogle.email, image: userGoogle.photoURL, name: userGoogle.displayName, creado: userCreated, id: userGoogle.uid};
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({type:'LOG_IN', payload: user});
        }).catch((error) => {
            console.log(error)
        });
        }
    }
}

export function logOut(){
    return async function (dispatch){
        const auth = getAuth();
        return await signOut(auth).then(() => {
            // Sign-out successful.
            localStorage.removeItem('user');
            dispatch({type:'LOG_OUT'});
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }
}