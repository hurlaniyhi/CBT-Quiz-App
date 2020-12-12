import { allQuestions } from './questions'

export const mainQuestions = () => {
    var questions = []
    var check = ""
    let generate
    let i = 1

    while (i <= 20){
        generate = Math.floor(Math.random() * 30)

        if(!check.includes(String(generate))){
            questions.push({...allQuestions()[generate], No: i})
            check = check + String(generate)
            i++
        }
    }
    
    return questions
} 