export const weekdays = (date:string)=>{
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const theDate = new Date(date)
    const dayIndex = theDate.getDay()
    return weekdays[dayIndex]
}

export const conditionTrim = (condition:string) =>{
    return condition.toLowerCase() === 'patchy rain nearby'? condition.slice(0,11): condition
}