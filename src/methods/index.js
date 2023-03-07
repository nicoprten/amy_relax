import { collection, doc, setDoc, addDoc, getDocs } from "firebase/firestore";
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
    const querySnapshot = await getDocs(collection(db, "Comentarios"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        comments.push(doc.data());
    });
    return comments;
}