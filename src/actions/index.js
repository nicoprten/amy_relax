import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { convertDate } from "./../methods/index.js";

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
            let user = {email: userGoogle.email, image: userGoogle.photoURL, name: userGoogle.displayName, creado: userCreated, id: userGoogle.uid, phone: ''};
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({type:'LOG_IN', payload: user});
        }).catch((error) => {
            // localStorage.setItem('user', 'none');
            dispatch({type:'LOG_OUT'});
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

export function changeUser(newData){
    return {type: 'CHANGE_USER', payload: newData};
}

export function changeReservation(reservation){
    return {type: 'CHANGE_RESERVATION', payload: reservation};
}

export function deleteReservation(){
    return {type: 'DELETE_RESERVATION'}
}