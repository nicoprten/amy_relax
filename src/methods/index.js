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

export function createHours({from, until}){
    const schedule = [];
    for (let hours = from; hours < until; hours++) {
        for (let minutes = 0; minutes < 60; minutes += 30) {
            const time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
            schedule.push(time);
        }
    }
    return schedule
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
export async function setDay(nameDay, numMonth, numDay, schedules){
    const q = query(collection(db, "Disponibilidad"), where('nameDay', '==', nameDay), where('numDay', '==', numDay), where('numMonth', '==', numMonth));
    const querySnapshot = await getDocs(q);
    if(querySnapshot.empty){
        const docRef = await addDoc(collection(db, "Disponibilidad"), {
            nameDay,
            numMonth,
            numDay,
            schedules
        });
        setDay(nameDay, numMonth, numDay, schedules)
    }else{
        return
    }
}

export async function getHours(nameDay, numMonth, numDay){
    let hours = []
    const q = query(collection(db, "Disponibilidad"), where('nameDay', '==', nameDay), where('numDay', '==', numDay), where('numMonth', '==', numMonth));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        console.log('JAJAAJJ')
        console.log(doc.data())
        hours.push(doc.data());
    });
    console.log(hours)
    return hours[0].schedules;
}

export async function postReservation(data){
    // Getting the array with the schedules availables and saving it in oldHours, also save dayId for edit doc in the future
    let oldHours = []
    let dayId = ''
    let nameDay = data.day.split(' ')[0]
    let numDay = data.day.split(' ')[1].split('/')[0]
    let numMonth = data.day.split(' ')[1].split('/')[1]
    const q = query(collection(db, "Disponibilidad"), where('nameDay', '==', nameDay), where('numDay', '==', numDay), where('numMonth', '==', numMonth));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        dayId = doc.id
        oldHours = doc.data().schedules;
    });

    // Now I create a new array with the schedules that the client is taking
    let hoursTaken = Math.ceil(+data.duration / 30 - 1)
    let schedulesBooked = [data.hour]
    let [hour, minutes] = schedulesBooked[0].split(':')
    let date = new Date()
    date.setHours(hour)
    date.setMinutes(minutes)
    for(let times = 0; times < hoursTaken; times++){
        date.setMinutes(date.getMinutes() + 30 * (times + 1))
        schedulesBooked.push(`${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`)
    }

    // And then filter the two arrays
    let hoursAvailables = oldHours.filter(hour => !schedulesBooked.includes(hour))

    // Edit the doc in firestore
    const dayRef = collection(db, "Disponibilidad");
    await setDoc(doc(dayRef, dayId), {
        nameDay,
        numDay,
        numMonth,
        schedules: hoursAvailables
    });

    // Post reservation
    const docRef = await addDoc(collection(db, "Reservas"), {
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
    return reservations;
}