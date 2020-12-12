import WelcomePage from './components/WelcomePage'
import Quiz from "./components/QuizPage"
import Congrats from "./components/CongratPage"

export default [
    {path: "/", component: WelcomePage,
        beforeEnter: (to, from, next) => {
            if(!localStorage.getItem("token1")){
                next()
            }
            else{
                next(false)
            }
        }
    },
    {path: "/instruction/:username", component: Quiz, 
        beforeEnter: (to, from, next) => {
            if(localStorage.getItem("token1")){
                next()
            }
            else{
                next("/")
            }
        }
    },
    {path: "/congrats/:username/:score/:time/:answered", component: Congrats,
        beforeEnter: (to, from, next) => {
            if(localStorage.getItem("token2")){
                next()
            }
            else{
                next("/")
            }
        }
    }
]