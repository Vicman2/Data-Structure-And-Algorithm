function timeConversion(s) {
    // Write your code here
    let timeSplit = s.split(':')
    let hour = parseInt(timeSplit[0])
    let mins = parseInt(timeSplit[1])
    let sec = parseInt(timeSplit[2].substring(0,2))
    let mode = timeSplit[2].substring(2,4)

    console.log(mode)
    
    if(mode === 'AM'){
        console.log(typeof hour, hour)
        if(hour === 12){
            hour = '00'
        }
    }else{
        if(hour === 12){
            hour = '12'
        }else{
            hour = (hour + 12).toString()
        }
    }
    
    return `${(hour.toString()).padStart(2, '0')}:${(mins.toString()).padStart(2, '0')}:${(sec.toString()).padStart(2, '0')}`
}

console.log(timeConversion('12:00:00AM'))