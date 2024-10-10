export const weekdays = (date:string)=>{
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const theDate = new Date(date)
    const dayIndex = theDate.getDay()
    return weekdays[dayIndex]
}