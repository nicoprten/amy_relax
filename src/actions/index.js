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