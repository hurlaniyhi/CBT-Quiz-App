export const answeredQuestions = (info) => {
    let count = 0
    for (let check of info){
        if(check.chosen){
            count++
        }
    }
    return count
}


export const quizTime = () => {
    var available = 20
    var today = new Date
    var hour = today.getHours() 
    var minutes = today.getMinutes()

    let startTime = `${hour}:${minutes}`

    if((minutes + available >= 60) && (hour != 23)){
        hour = hour + 1
        minutes = available - (60 - minutes)
    }
    else if((minutes + available >= 60) && (hour === 23)){
        hour = 1
        minutes = available - (60 - minutes)
    }
    else{
        minutes = minutes + 20
    }

    let stopTime = `${hour}:${minutes}`
    
    return {
        startTime: timeFormat(startTime),
        stopTime: timeFormat(stopTime)
    }
}

function timeFormat(oldFormat){
    var splitTime = oldFormat.split(":")
    if (splitTime[0].length == 1 && splitTime[1].length == 1){
        splitTime = [`0${splitTime[0]}`, `0${splitTime[1]}`]
    } 
    else if (splitTime[0].length == 1){
        splitTime = [`0${splitTime[0]}`, splitTime[1]]
    }
    else if (splitTime[1].length == 1){
        splitTime = [splitTime[0], `0${splitTime[1]}`]
    }

    var newFormat = `${splitTime[0]}:${splitTime[1]}`
    return newFormat
}
