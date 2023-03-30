import { collection, doc, setDoc, addDoc, getDocs, query, orderBy, limit, where } from "firebase/firestore";
import { db } from './../firebase.js';

// Parse date (miliseconds for example) to dd/mm/yyyy
export function convertDate(date){
    let newDate = new Date(+date);
    console.log(newDate);
    let year = newDate.getFullYear();
    console.log(year);
    let month = ("0" + (newDate.getMonth() + 1)).slice(-2);
    let day = ("0" + newDate.getDate()).slice(-2);
    let dateConverted = `${day}-${month}-${year}`;
    return dateConverted;
}

// Order array of objects by date dd/mm/yyyy
// export function sortByDate(dates){
//     dates.sort(function(a, b){
//         var aa = a.split('/').reverse().join(),
//             bb = b.split('/').reverse().join();
//         return aa < bb ? -1 : (aa > bb ? 1 : 0);
//     });
// }

export async function postComment(user, comment){
    const dbRef = await addDoc(collection(db, "Comentarios"), {
        userId: user.id,
        comment,
        date: convertDate(new Date()),
        userImg: user.image,
        userName: user.name
    });
}

export async function getComments(){
    let comments = [];
    const q = query(collection(db, 'Comentarios'), orderBy('date', 'desc'), limit(4));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        comments.push(doc.data());
    });
    return comments;
}

export async function getMassages(){
    let massages = [];
    const q = query(collection(db, 'Masajes'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        massages.push(doc.data());
    });
    return massages;
} 

// CREA EL DIA CON SUS HORARIOS DISPONIBLES SI ES QUE TODAVIA NO EXISTE
export async function setDay(nameDay, numberMonth, numberDay, schedules){
    const q = query(collection(db, "Disponibilidad"), where('nombreDia', '==', nameDay), where('numDia', '==', numberDay), where('numMes', '==', numberMonth));
    const querySnapshot = await getDocs(q);
    if(querySnapshot.empty){
        const docRef = await addDoc(collection(db, "Disponibilidad"), {
            nombreDia: nameDay,
            numMes: numberMonth,
            numDia: numberDay,
            horarios: schedules
        });
        setDay(nameDay, numberMonth, numberDay, schedules)
    }else{
        return
    }
}

export async function getHours(nameDay, numberMonth, numberDay){
    let hours = []
    const q = query(collection(db, "Disponibilidad"), where('nombreDia', '==', nameDay), where('numDia', '==', +numberDay), where('numMes', '==', numberMonth));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        hours.push(doc.data());
    });
    console.log(hours)
    return hours[0].horarios;
}

export async function postReservation(data){
    const dbRef = await addDoc(collection(db, "Reservas"), {
        data
    });
}

export async function getReservations(email){
    let reservations = []
    const q = query(collection(db, "Reservas"), where('data.client.email', '==', email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        reservations.push(doc.data().data);
    });
    console.log(reservations)
    return reservations;
}