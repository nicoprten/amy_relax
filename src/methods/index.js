import { collection, doc, setDoc, addDoc, getDocs, query, orderBy, limit } from "firebase/firestore";
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
    console.log("Document written with ID: ", dbRef.id);
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