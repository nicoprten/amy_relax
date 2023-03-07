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